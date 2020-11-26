import React from 'react';

class Weatherdetails extends React.Component{

  render() {
    if (!this.props.details)
    {
      return (
           <h5>Enter your City</h5> 
      ) 
    }
      return (
          <div className="ui container" style={{textAlign:"center"}}>
          <h2>
            Your City:{this.props.details.name}
          </h2>
          <h1>
            Temperature: {Math.round(this.props.details.main.temp-273)}° C
          </h1>
          <h2>Feels-like: {Math.round(this.props.details.main.feels_like-273)}° C</h2>
          <h2>Weather:{this.props.details.weather[0].description}</h2>
          <h2>Wind:   (Speed) {this.props.details.wind.speed} (deg){this.props.details.wind.deg}</h2>
          <h2>Visibility: {this.props.details.visibility}</h2>
          </div>
    
    )
  }  
}

export default Weatherdetails;
