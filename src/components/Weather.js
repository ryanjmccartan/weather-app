import React, {Component} from 'react';
import axios from 'axios';
import Forecast from './Forecast';
import { TextField, Button } from '@material-ui/core';
import './Weather.css';

class Weather extends Component {

    state = {
        input: '',
        weather: {
            location: {
                name: '',
                region: ''
            },
            current: {
                temp_f: 0,
                feelslike_f: 0,
                gust_mph: 0
            },
            condition_current: {
                condition_icon: ''
            }
        },
        forecast: {
            day_array: [],
        }
    }

    // getCurrentWeather function receives current-day forecast from API
    getCurrentWeather = (e) => {
        const city = this.state.input;
        axios.get(`/weather/current/${city}`).then(response => {
            console.log('getting current weather', response.data);
            this.setState({
                input: '',
                weather: {
                    location: {
                        name: response.data.location.name,
                        region: response.data.location.region
                    },
                    current: {
                        temp_f: response.data.current.temp_f,
                        feelslike_f: response.data.current.feelslike_f,
                        gust_mph: response.data.current.gust_mph
                    },
                    condition_current: {
                        condition_icon: response.data.current.condition.icon
                    }
                }
            });
            // console.log('in current weather location', this.state.weather.location)
        }).catch(error => {
            console.log('error getting current weather', error);
        });
    }

    // getWeatherForecast function receives three-day forecast from API
    getWeatherForecast = () => {
        if(this.state.input === '') {
            alert('Please enter the name of a city');
        }
        else{
        const city = this.state.input;
        axios.get(`/weather/forecast/${city}`).then(response => {
            console.log('getting weather forecast', response.data);
            this.setState({
                forecast: {
                    day_array: [],
                    astro_array: []
                }
            });
            response.data.forEach(forecast => {
                this.setState({
                    forecast: {
                        day_array: [...this.state.forecast.day_array, forecast],
                    }
                })
            });
            this.getCurrentWeather();
            console.log('in forecast state day', this.state.forecast.day_array)
        }).catch(error => {
            console.log('error getting weather forecast', error);
        });
      }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value 
        })
    }

    render() {
        // Precip variable is used to calculate the precipitation over three-day forecast
        let precip = 0;

        this.state.forecast.day_array.map(forecast => {
            precip += forecast.day.totalprecip_in;
            // console.log('after adding precip', precip);
            return precip; 
        });

        return(
            <div>
                <div className="location-input">
                    <TextField 
                    margin="dense"
                    label="Enter location"
                    type="text"
                    value={this.state.input} 
                    placeholder='city name or zip code' 
                    onChange={(e) => this.handleChange(e)}
                    />
                    <Button id="srch-btn" color="default" variant="contained" onClick={this.getWeatherForecast}>Search</Button>
                </div>
                {this.state.forecast.day_array.length !== 0 ?
                <div className="showing-weather">
                    <div className="current-weather-container">
                        <h3>{this.state.weather.location.name}, {this.state.weather.location.region}</h3>
                        <img src={this.state.weather.condition_current.condition_icon} alt="weather icon"/>
                        <p>Current Temperature:
                            <br/>
                            {this.state.weather.current.temp_f}</p>
                            Feels like: {this.state.weather.current.feelslike_f}
                    </div>
                    {/* <h3>Forecast:</h3>
                    Expected precipitation (in inches):
                    <br/>
                    {precip} */}
                    <Forecast forecast={this.state.forecast.day_array}/>
                    <br/>
                    <br/>
                    <br/>
                </div> 
                :
                <div>
                    <br/>
                    <br/>
                    <h3>Enter a city to check the weather!</h3>
                    <br/>
                    <br/>
                </div>
                }
                {/* Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a> */}
            </div>
        )
    }
}

export default Weather;