const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

router.get('/', (req, res) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Minneapolis`
    axios({
        method: 'GET',
        url: url
    }).then( (response) => {
        console.log('getting current weather', response.data);
        res.send(response.data);
    }).catch( error => {
        console.log("error with getting weather", error);
    })
})

module.exports = router;