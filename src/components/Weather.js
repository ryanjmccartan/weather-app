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
        // condition_forecast: {
        //     condition_icon: []
        // },
        forecast: {
            day_array: [],
            astro_array: []
        }
    }

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
            })
        }).catch(error => {
            console.log('error getting current weather', error);
        })
    }

    getWeatherForecast = () => {
        if(this.state.weather.location == '') {
            alert('Please enter the name of a city');
        }
        else{
        const city = this.state.weather.location;
        axios.get(`/weather/forecast/${city}`).then(response => {
            console.log('getting weather forecast', response.data);
            this.setState({
                // condition_forecast: {
                //     condition_icon: []
                // },
                forecast: {
                    day_array: [],
                    astro_array: []
                }
            })
            response.data.forEach(forecast => {
                this.setState({
                    // condition_forecast: {
                    //     condition_icon: [...this.state.condition_forecast.condition_icon, forecast.day.condition.icon]
                    // },
                    forecast: {
                        day_array: [...this.state.forecast.day_array, forecast.day],
                        astro_array: [...this.state.forecast.astro_array, forecast.astro]
                    }
                })
            });
            this.getCurrentWeather();
            console.log('in forecast state day', this.state.forecast.day_array)
            console.log('in forecast state astro', this.state.forecast.astro_array)
            // console.log('in condition forecast icon', this.state.condition_forecast.condition_icon);
        }).catch(error => {
            console.log('error getting weather forecast', error);
        })
      }
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

    render() {
        let precip = 0;

        const precipCalculate = this.state.forecast.day_array.map(day => {
            // console.log('this is precip', day.totalprecip_in)
            precip += day.totalprecip_in;
            console.log('after adding precip', precip);
            return precip;
            
        })

        return(
            <div>
                <input placeholder='enter city name' onChange={(e) => this.handleChange(e)}/>
                <button onClick={this.getWeatherForecast}>Check weather</button>
                {this.state.forecast.day_array.length !== 0 ?
                <>
                <h3>Today's Weather:</h3>
                <img src={this.state.weather.condition_current.condition_icon} alt="weather_icon"/>
                <p>Current Temperature:
                    <br/>
                    {this.state.weather.current.temp_f}</p>
                <br/>
                Feels like: {this.state.weather.current.feelslike_f}
                {/* {JSON.stringify(this.state.weather.current.temp_f)} */}
                {/* {this.state.forecast.forecast_day.forEach(day => {
                    return <li>{day}</li>
                }  */}
                   
                    {/* )} */}
                <br/>
                {/* {JSON.stringify(this.state.forecast.day_array)} */}
                {/* {JSON.stringify(this.state.weather.current.gust_mph)} */}
                <br/>
                <h3>3-Day Forecast:</h3>
                <Forecast forecast={this.state.forecast.day_array}/>
                {precip}
                <br/>
                </> 
                :
                <>
                <br/>
                Enter a city to check the weather!
                <br/>
                <br/>
                </>
                
                }
                Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </div>
        )
    }
}

export default Weather;