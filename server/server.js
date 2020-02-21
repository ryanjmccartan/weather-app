const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// Route includes
const weatherRouter = require('./routes/weather-router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/weather', weatherRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});