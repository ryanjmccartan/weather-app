import React, {Component} from 'react';
import axios from 'axios';

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
            },
            forecast: {
                forecast_day: []
            }
        }
    }

    componentDidMount = () => {
        this.getCurrentWeather();
        this.getWeatherForecast();
    }

    getCurrentWeather = () => {
        axios.get('/weather/current').then(response => {
            console.log('getting current weather', response.data);
            this.setState({
                weather: {
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
        axios.get('/weather/forecast').then(response => {
            console.log('getting weather forecast', response.data);
            // this.setState({
            //     weather: {
            //         current: {
            //             temp_f: response.data.current.temp_f
            //         }
            //     }
            // })
        }).catch(error => {
            console.log('error getting weather forecast', error);
        })
    }

    

    handleChange = (e, input) => {
        this.setState({
            ...this.state.weather.location, 
            [input]: e.target.value
        })
        console.log('location entered', this.state.weather.location);
    }

    render() {
        return(
            <div>
                <h3>Current Temperature:</h3>
                <input placeholder='enter city' value={this.state.weather.location} onChange={(e) => this.handleChange(e, 'location')}/>
                <img src={this.state.weather.condition.condition_icon} alt="weather_icon"/>
                {JSON.stringify(this.state.weather.current.temp_f)}
                <br/>
                {/* {JSON.stringify(this.state.weather.current.gust_mph)} */}
                <br/>
                Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </div>
        )
    }
}

export default Weather;