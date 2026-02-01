# Blueprint for Dan or Dajin Image Classifier

## Overview
This project implements a simple web-based image classifier using a Teachable Machine model. It leverages TensorFlow.js and Teachable Machine's image library to capture webcam input, predict classes (e.g., Dan or Dajin), and display the probabilities in real-time.

## Project Outline (Implemented Features)
*   **HTML Structure:**
    *   Basic HTML5 document (`index.html`).
    *   `<title>` tag set to "Dan or Dajin Classifier".
    *   `<div>` for displaying the "Teachable Machine Image Model" title.
    *   `<button>` to initiate the webcam and classification (`onclick="init()"`).
    *   `<div id="webcam-container">` to hold the webcam video feed.
    *   `<div id="label-container">` to display the prediction labels and probabilities.
*   **CSS Styling:**
    *   Basic styling defined within `<style>` tags in `index.html`.
    *   Uses a sans-serif font.
    *   Centers content horizontally using flexbox.
    *   Adds margin to elements for visual separation.
    *   `#webcam-container` has a border, rounded corners, and hidden overflow.
    *   `#label-container` has a larger font size.
    *   The "Start" button is styled with a green background, white text, padding, rounded corners, and a hover effect.
*   **JavaScript Logic:**
    *   Embedded within `<script>` tags in `index.html`.
    *   **Libraries:**
        *   TensorFlow.js (from `cdn.jsdelivr.net`).
        *   Teachable Machine Image library (from `cdn.jsdelivr.net`).
    *   **Model Path:** `const URL = "./my_model/";` - expects `model.json` and `metadata.json` to be located in a `my_model` subdirectory.
    *   **`init()` function:**
        *   Asynchronously loads the Teachable Machine model and metadata.
        *   Sets up the webcam (`tmImage.Webcam(200, 200, true)` for 200x200px and flipped).
        *   Requests webcam access and starts playback.
        *   Appends the webcam canvas to `webcam-container`.
        *   Creates and appends prediction label divs to `label-container`.
        *   Includes basic error handling for model loading and webcam setup, displaying a message in `label-container` if an error occurs.
    *   **`loop()` function:**
        *   Continuously updates the webcam frame and calls `predict()`.
        *   Uses `window.requestAnimationFrame` for efficient animation.
    *   **`predict()` function:**
        *   Takes the current webcam image and runs it through the loaded model.
        *   Iterates through predictions, formats class names and probabilities, and updates the `innerHTML` of the label divs in `label-container`.
*   **Model Integration:** The application is designed to load a custom image classification model from a local directory named `my_model`. This directory is expected to contain `model.json` and `metadata.json`, which are outputs from Teachable Machine.
*   **User Interaction:** A single "Start" button triggers the `init()` function, which loads the model, activates the webcam, and begins the real-time classification process.

## Current Change (Initial Website Setup)
The user requested to completely replace the content of `index.html` to set up a web-based image classifier. This involved:
1.  Creating a new `index.html` file with the provided HTML structure, CSS styling, and JavaScript logic for integrating a Teachable Machine image model.
2.  Integrating external JavaScript libraries (TensorFlow.js and Teachable Machine Image) via CDN links.
3.  Establishing the core functionality to load a model, access the webcam, and display predictions.
4.  Adding basic error handling and user instructions regarding the model path.