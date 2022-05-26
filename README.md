# DigitRecognizer
A simple React app to recognise handwritten numeric digits using a pre-trained CNN.

This web app has been deployed using Netlify [here](https://digitrecognizer.netlify.app/). Make sure you check it out!

## About the Project
Recognizing Handwritten digits using a CNN Model trained on the MNIST Dataset is a milestone for many Machine Learning beginners (including myself XD). There are many models available on the internet with more than 99.7% accuracy, and my model is no match to those! I wanted to create a simple project which does the same task of recognizing digits, but now it is an interactive app where users can draw their digits and my model recognizes them. [This](https://github.com/ixartz/handwritten-digit-recognition-tensorflowjs) project was the inspiration behind making this web app.

### Convolutional Neural Network
I have used a 3-layer deep Convolutional Neural Network and trained it on the MNIST Dataset with an accuracy of 99.3%. This model is saved in tfjs format using the Python tfjs API. 

### React frontend
I have designed the web application using React and React Bootstrap libraries. The frontend uses the saved CNN model to predict the user input and displays it.

## Getting Started
To run this app, 

 - Clone this repository
    ```shell
    git clone https://github.com/GauthamBellamkonda/DigitRecognizer.git
    ```
 - Install node packages/dependencies
    ```shell
    npm install
    ```
 - Run this app
    ```shell
    npm run start
    ```

### TO DO
- [x] Write a decent README
- [ ] Make a chart of predictions
- [ ] Cleanup/Refactor code
- [ ] WIP: Improve the model
  - [ ] Use TensorBoard to monitor the accuracy/results of the model
- [ ] Add colors to frontend, make it more interactive/beautiful
- [ ] Explain the complete working/design of the app either in README or the page
- [ ] Minor changes in CNN
- [ ] Recognize multiple digits in one shot
- [ ] Recognize text (all alphanumeric characters)
