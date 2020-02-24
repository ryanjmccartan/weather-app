import React, {Component} from 'react'

class Forecast extends Component {
    render() {

        // const {day:{maxtemp_f}} = this.props.forecast;
        // console.log(maxtemp_f);

        return(
            <>
            {this.props.forecast.map(day => {
                return <li key={day.date}>{day.maxtemp_f}</li>
            })}
            </>
        )
    }
}

export default Forecast;