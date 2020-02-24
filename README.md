This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Weather App

This is a weather app that utilizes a weather API and allows a user to enter in the name of a city and receive both its current and three-day weather forecast.

## Built With
​
* [Weatherapi.com](https://www.weatherapi.com/)
* JavaScript
* React.js
* Node.js
* Express

for a full list of dependencies, please see the package.json file.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites
​
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- You will need an API key. For more information, visit the Weather API [documentation](https://www.weatherapi.com/docs/#). 

### Installing

* Open a new terminal window
* Navigate to the project directory path
* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    API_KEY=<YOUR_API_KEY>
    ```
* In a terminal window, type `npm run server`
* In another terminal window, type `npm run client`
* Navigate to `localhost:3000`