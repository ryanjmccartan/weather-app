import React, {Component} from 'react'

class Forecast extends Component {
    render() {
// This component renders the three-day forecast
        return(
            <div>
                {this.props.forecast.map(day => {
                    return <p key={day.maxtemp_f}>
                        <img src={day.condition.icon} alt="weather-icon"/>
                        <br/>
                        Max temp: 
                        <br/>
                        {day.maxtemp_f}
                        <br/>
                        Min temp:
                        <br/>
                        {day.mintemp_f}
                    </p>
                })}
            </div>
        )
    }
}

export default Forecast;