import React, {Component} from 'react';
import axios from 'axios';

class Weather extends Component {

    state = {
        weather: {
            location: {},
            current: {
                temp_f: 0
            }
        }
    }

    componentDidMount = () => {
        this.getCurrentWeather();
    }

    getCurrentWeather = () => {
        axios.get('/weather/current').then(response => {
            console.log('getting current forecast', response.data);
            this.setState({
                weather: {
                    current: {
                        temp_f: response.data.current.temp_f
                    }
                }
            })
        }).catch(error => {
            console.log('error getting current weather', error);
        })
    }

    render() {
        return(
            <div>
                {JSON.stringify(this.state.weather.current.temp_f)}
            </div>
        )
    }
}

export default Weather;