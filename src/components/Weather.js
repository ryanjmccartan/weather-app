import React, {Component} from 'react';
import axios from 'axios';
import Forecast from './Forecast';

class Weather extends Component {

    state = {
        weather: {
            location: '',
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
            astro_array: []
        }
    }

    // getCurrentWeather function receives current-day forecast from API
    getCurrentWeather = (e) => {
        const city = this.state.weather.location;
        axios.get(`/weather/current/${city}`).then(response => {
            console.log('getting current weather', response.data);
            this.setState({
                weather: {
                    location: response.data.location.name,
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
        }).catch(error => {
            console.log('error getting current weather', error);
        })
    }

    // getWeatherForecast function receives three-day forecast from API
    getWeatherForecast = () => {
        if(this.state.weather.location === '') {
            alert('Please enter the name of a city');
        }
        else{
        const city = this.state.weather.location;
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
                        day_array: [...this.state.forecast.day_array, forecast.day],
                        astro_array: [...this.state.forecast.astro_array, forecast.astro]
                    }
                })
            });
            this.getCurrentWeather();
            console.log('in forecast state day', this.state.forecast.day_array)
            console.log('in forecast state astro', this.state.forecast.astro_array)
        }).catch(error => {
            console.log('error getting weather forecast', error);
        })
      }
    }

    handleChange = (e) => {
        this.setState({
            weather: {
            ...this.state.weather, 
            location: e.target.value
            }
        })
    }

    render() {
        // Precip variable is used to calculate the precipitation over three-day forecast
        let precip = 0;

        this.state.forecast.day_array.map(day => {
            precip += day.totalprecip_in;
            console.log('after adding precip', precip);
            return precip; 
        });

        return(
            <div className="weather-forecast">
                <input placeholder='enter city name' onChange={(e) => this.handleChange(e)}/>
                <button onClick={this.getWeatherForecast}>Check weather</button>
                {this.state.forecast.day_array.length !== 0 ?
                <div className="show-weather">
                    <h3>Today's Weather:</h3>
                    <img src={this.state.weather.condition_current.condition_icon} alt="weather_icon"/>
                    <p>Current Temperature:
                        <br/>
                        {this.state.weather.current.temp_f}</p>
                        <br/>
                        Feels like: {this.state.weather.current.feelslike_f}
                    <br/>
                    <h3>3-Day Forecast:</h3>
                    Expected precipitation (in inches):
                    <br/>
                    {precip}
                    <Forecast forecast={this.state.forecast.day_array}/>
                    <br/>
                    <br/>
                    <br/>
                </div> 
                :
                <div>
                    <br/>
                    <br/>
                    Enter a city to check the weather!
                    <br/>
                    <br/>
                </div>
                }
                Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </div>
        )
    }
}

export default Weather;