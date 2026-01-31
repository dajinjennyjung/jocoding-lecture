
class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'lotto-generator');

    const title = document.createElement('h1');
    title.textContent = 'Lotto Number Generator';

    const numberContainer = document.createElement('div');
    numberContainer.setAttribute('class', 'number-container');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers());

    const style = document.createElement('style');
    style.textContent = `
      .lotto-generator {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: sans-serif;
        padding: 2em;
        background: #f4f4f9;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      h1 {
        color: #333;
      }
      .number-container {
        display: flex;
        gap: 10px;
        margin: 20px 0;
      }
      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid #ddd;
        font-size: 1.2em;
        font-weight: bold;
        color: #333;
      }
      button {
        padding: 10px 20px;
        font-size: 1em;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      button:hover {
        background-color: #0056b3;
      }
    `;

    this.shadowRoot.append(style, wrapper);
    wrapper.append(title, numberContainer, button);
  }

  generateNumbers() {
    const numberContainer = this.shadowRoot.querySelector('.number-container');
    numberContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const numberElement = document.createElement('div');
        numberElement.setAttribute('class', 'number');
        numberElement.textContent = number;
        numberContainer.appendChild(numberElement);
    }
  }
}

customElements.define('lotto-generator', LottoGenerator);
