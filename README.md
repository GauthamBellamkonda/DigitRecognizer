# DigitRecognizer
A simple React app to recognise handwritten numeric digits using a pre-trained CNN

## About the Project
Recognizing Handwritten digits using a CNN Model trained on the MNIST Dataset is a milestone for many Machine Learning beginners, including me. There are many models available on the internet with more than 99.7% accuracy, and my model is no match to those! I wanted to create a simple web app which does the same task of recognizing digits, but now it is an interactive app where users can draw their digits and my model recognizes them. I got the inspiration for my project from [this](https://github.com/ixartz/handwritten-digit-recognition-tensorflowjs). Make sure to check it out!

### Convolutional Neural Network
I have used a 3-layer deep Convolutional Neural Network and trained it on the MNIST Dataset with an accuracy of 99.3%. This model is saved in tfjs format using the Python tfjs API. 

### React frontend
I have designed the web application using React and React Bootstrap libraries. The frontend uses the saved CNN model to predict the user input and displays it.

## Getting Started
To run this app, 

### TO DO
- [ ] Write a decent README
- [ ] Cleanup/Refactor code
- [ ] WIP: Improve the model
  - [ ] Use TensorBoard to monitor the accuracy/results of the model
- [ ] Add colors to frontend, make it more interactive/beautiful
- [ ] Explain the complete working/design of the app either in README or the page
- [ ] Minor changes in CNN
- [ ] Recognize multiple digits in one shot
- [ ] Recognize text (all alphanumeric characters)