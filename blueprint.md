# Project Blueprint

## Overview

This project is a simple web application that demonstrates modern web development techniques. It started as a "Hello, World!" application and has evolved to include a "Lotto Number Generator" web component.

## Implemented Features

### V1: Initial Setup
- **HTML:** Basic HTML5 structure in `index.html`.
- **CSS:** A simple stylesheet in `style.css`.
- **JavaScript:** An empty `main.js` file.

### V2: Lotto Number Generator
- **Web Component:** A `<lotto-generator>` custom element was created to encapsulate the functionality.
- **Shadow DOM:** The component uses Shadow DOM for style and structure encapsulation.
- **Functionality:**
    - A button to trigger the generation of lotto numbers.
    - Displays 6 unique random numbers between 1 and 45.
- **Styling:** The component has self-contained styles for a clean and modern look. The overall page is styled for better presentation.

## Current Plan

The current request is to create a "Lotto Number Generator".

**Steps:**

1.  **`blueprint.md`:** Create this blueprint file to document the project.
2.  **`index.html`:**
    *   Update the title to "Lotto Number Generator".
    *   Add the `<lotto-generator>` custom element.
3.  **`main.js`:**
    *   Create the `LottoGenerator` class as a web component.
    *   Implement the logic for generating and displaying lotto numbers.
4.  **`style.css`:**
    *   Add styles to center the component and improve the page aesthetics.
