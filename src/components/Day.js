import React, {Component} from 'react'


class Day extends Component {
    render() {
        return(
            <>
            {this.props.forecast.map(day => {
                return <li key={day.date}>{day.date}</li>
            })}
            </>
        )
    }
}

export default Day;