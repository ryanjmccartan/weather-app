import React, {Component} from 'react';
import moment from 'moment';
import './Forecast.css';
// import 'materialize-css/dist/css/materialize.min.css';


class Forecast extends Component {
    render() {
// This component renders the forecast
        return(
            <div id='forecast-container'>
                {this.props.forecast.map(forecast => {
                    return <div key={forecast.date}>
                        <div className="weather-forecast">
                            {moment(forecast.date).format('ddd')}
                            <br/>
                            {moment(forecast.date).format('MM/DD')}
                            <img src={forecast.day.condition.icon} alt="weather icon"/>
                        <br/>
                        <div className="temp">
                            High: 
                            <br/>
                            {forecast.day.maxtemp_f}
                            <br/>
                            Low:
                            <br/>
                            {forecast.day.mintemp_f}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default Forecast;