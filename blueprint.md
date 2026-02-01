# Blueprint for Dan or Dajin Image Classifier

## Overview
This project implements a simple web-based image classifier using a Teachable Machine model. It leverages TensorFlow.js and Teachable Machine's image library to capture webcam input, predict classes (e.g., Dan or Dajin), and display the probabilities in real-time.

## Project Outline (Implemented Features)
*   **HTML Structure:**
    *   Basic HTML5 document (`index.html`).
    *   `<h1>Dan or Dajin Image Classifier</h1>` as the main title.
    *   `<input type="file" id="image-upload" accept="image/*">` for selecting image files.
    *   `<div id="image-display-container">` to display the uploaded image.
    *   `<img id="uploaded-image">` inside `image-display-container` to show the selected image.
    *   `<div id="label-container">` to display the prediction labels and probabilities.
    *   `<button id="predict-button" style="display:none;">결과보기</button>` to trigger prediction.
*   **CSS Styling:**
    *   Basic styling defined within `<style>` tags in `index.html`.
    *   Uses a sans-serif font.
    *   Centers content horizontally using flexbox.
    *   Adds margin to elements for visual separation.
    *   `#image-display-container` (formerly `webcam-container`) provides a placeholder for the image.
    *   `#uploaded-image` is initially hidden and styled for display after upload.
    *   `#label-container` has a larger font size.
    *   The previous button styling has been removed as the button is no longer present.
*   **JavaScript Logic:**
    *   Embedded within `<script>` tags in `index.html`.
    *   **Libraries:**
        *   TensorFlow.js (from `cdn.jsdelivr.net`).
        *   Teachable Machine Image library (from `cdn.jsdelivr.net`).
    *   **Model Path:** `const URL = "https://teachablemachine.withgoogle.com/models/qPZfpoLBd/";` - directly loads the model from the provided Teachable Machine URL.
    *   `uploadedImage` variable to store the uploaded image element.
    *   **`init()` function:**
        *   Asynchronously loads the Teachable Machine model and metadata.
        *   Sets up `labelContainer` divs.
        *   Attaches an event listener to the `image-upload` input to call `handleImageUpload` when a file is selected.
        *   Attaches an event listener to the `predict-button` to call `predict` when clicked.
        *   Includes basic error handling for model loading.
    *   **`handleImageUpload(event)` function:**
        *   Reads the selected image file using `FileReader`.
        *   Sets the `src` of `uploaded-image` to the read image data and makes it visible.
        *   Shows the `predict-button`.
    *   **`predict(imageElement)` function:**
        *   Takes an `HTMLImageElement` as input.
        *   Runs the image through the loaded model.
        *   Iterates through predictions, formats class names and probabilities, and updates the `innerHTML` of the label divs in `label-container`.
    *   `window.onload = init;` ensures the model is initialized when the page loads.
*   **Model Integration:** The application directly loads a custom image classification model from the provided Teachable Machine URL (`https://teachablemachine.withgoogle.com/models/qPZfpoLBd/`). This URL is expected to host `model.json` and `metadata.json`.
*   **User Interaction:** Users can upload an image file using the file input. After the image is displayed, a "결과보기" (See Results) button appears. Clicking this button triggers the classification and displays the results.

## Current Change (Initial Website Setup)
The user requested to completely replace the content of `index.html` to set up a web-based image classifier. This involved:
1.  Creating a new `index.html` file with the provided HTML structure, CSS styling, and JavaScript logic for integrating a Teachable Machine image model.
2.  Integrating external JavaScript libraries (TensorFlow.js and Teachable Machine Image) via CDN links.
3.  Establishing the core functionality to load a model, access the webcam, and display predictions.
4.  Adding basic error handling and user instructions regarding the model path.