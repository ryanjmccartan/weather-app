import React, {Component} from 'react'
import CalculatePrecip from './CalculatePrecip';

class Forecast extends Component {
    render() {

        return(
            <>
            {this.props.forecast.map(day => {
                return <p key={day.date}>
                    <img src={day.condition.icon}/>
                    <br/>
                    Max temp: 
                    <br/>
                    {day.maxtemp_f}
                    <br/>
                    Min temp:
                    <br/>
                    {day.mintemp_f}
                    {/* <CalculatePrecip precipitation={day.totalprecip_mm}/> */}
                </p>
            })}
            </>
        )
    }
}

export default Forecast;