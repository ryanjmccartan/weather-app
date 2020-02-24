import React, {Component} from 'react';

class CalculatePrecip extends Component {

    state = {
        precipitationNumbers: []
    }

    componentDidMount = () => {
        this.getPrecip();
    }

    getPrecip = () => {
        this.setState({
            precipitationNumbers: []
        })
        this.setState({
            precipitationNumbers: [...this.state.precipitationNumbers, this.props.precipitation]
        })
    }
    
    render() {
        console.log('this is precip', this.state.precipitationNumbers)

        const precipCalculate = this.state.precipitationNumbers.map(number => {
            let precip = 0;
            precip+=number
            return precip;
        })

        return(
            <div>
                {precipCalculate}
            </div>
        )
    }
}

export default CalculatePrecip;