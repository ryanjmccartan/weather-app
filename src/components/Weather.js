import React, {Component} from 'react';
import axios from 'axios';

class Weather extends Component {

    state = {
        weather: []
    }

    componentDidMount = () => {
        this.getWeather();
    }

    getWeather = () => {
        axios.get('/weather').then(response => {
            console.log('getting forecast', response.data);
            // this.setState({
            //     weather: response
            // })
        }).catch(error => {
            console.log('error getting weather', error);
        })
    }

    render() {
        return(
            <div>
                {JSON.stringify(this.state.weather)}
            </div>
        )
    }
}

export default Weather;