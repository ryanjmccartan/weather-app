const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

// GET route grabs the current-day forecast
router.get('/current/:id', (req, res) => {
    const city = req.params.id;
    let url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`
    axios({
        method: 'GET',
        url: url
    }).then( (response) => {
        console.log('getting current weather', response.data);
        res.send(response.data);
    }).catch( error => {
        console.log("error with getting current weather", error);
    })
});

// GET route grabs three-day forecast
router.get('/forecast/:id', (req, res) => {
    const city = req.params.id;
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=3`
    axios({
        method: 'GET',
        url: url
    }).then( (response) => {
        console.log('getting weather forecast', response.data.forecast.forecastday);
        res.send(response.data.forecast.forecastday);
    }).catch( error => {
        console.log("error with getting weather forecast", error);
    })
});

module.exports = router;