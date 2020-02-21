import React, {Component} from 'react';
import './App.css';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return(
      <div className="App">
        <p>Let's check the weather!</p>
        <Weather/>
      </div>
    )
  }
}

export default App;
