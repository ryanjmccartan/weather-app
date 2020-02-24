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
            condition: {
                condition_icon: ''
            }
        },
        forecast: {
            day_array: [],
            astro_array: []
        }
    }

    componentDidMount = () => {
        // this.getCurrentWeather();
        // this.getWeatherForecast();
    }

    getCurrentWeather = () => {
        const city = this.state.weather.location;
        axios.get(`/weather/current/${city}`).then(response => {
            console.log('getting current weather', response.data);
            this.setState({
                weather: {
                    location: response.data.location.name,
                    current: {
                        temp_f: response.data.current.temp_f,
                        gust_mph: response.data.current.gust_mph
                    },
                    condition: {
                        condition_icon: response.data.current.condition.icon
                    }
                }
            })
        }).catch(error => {
            console.log('error getting current weather', error);
        })
    }

    getWeatherForecast = () => {
        const city = this.state.weather.location;
        axios.get(`/weather/forecast/${city}`).then(response => {
            console.log('getting weather forecast', response.data);
            this.setState({
                forecast: {
                    day_array: [],
                    astro_array: []
                }
            })
            response.data.forEach(object => {
                this.setState({
                    forecast: {
                        day_array: [...this.state.forecast.day_array, object.day],
                        astro_array: [...this.state.forecast.astro_array, object.astro]
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

    

    handleChange = (e) => {
        // console.log(e.target.value, input);
        this.setState({
            weather: {
            ...this.state.weather, 
            location: e.target.value
            }
        })
        // console.log('location entered', this.state.weather.location);
    }

    // addUserInput = () => {
    //     let city = {
    //         property: this.state.weather.location
    //     };
    //     axios.post('/weather/current', city).then(response => {
    //         console.log('user changed city', response);
    //     }).catch(error => {
    //         console.log('error posting user input', error);
    //     })
    //     console.log('in addUser', city);
    // }

    render() {
        return(
            <div>
                <h3>Current Temperature:</h3>
                <input placeholder='enter city name' onChange={(e) => this.handleChange(e)}/>
                <button onClick={this.getWeatherForecast}>Check weather</button>
                <img src={this.state.weather.condition.condition_icon} alt="weather_icon"/>
                {JSON.stringify(this.state.weather.current.temp_f)}
                {/* {this.state.forecast.forecast_day.forEach(day => {
                    return <li>{day}</li>
                }  */}
                   
                    {/* )} */}
                <br/>
                {/* {JSON.stringify(this.state.forecast.day_array)} */}
                {/* {JSON.stringify(this.state.weather.current.gust_mph)} */}
                <br/>
                <Forecast forecast={this.state.forecast.day_array}/>
                Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </div>
        )
    }
}

export default Weather;