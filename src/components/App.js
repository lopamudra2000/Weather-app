import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherDetail from './WeatherDetail';
import '../styles.css';


const KEY="12968a563bd83b80017a4da573342738";



class App extends React.Component{
  state = {details : ''};

  componentDidMount(){
    this.onSearchSubmit('Delhi');
  }

    onSearchSubmit=async (term)=>{

       const response= await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
              q: term,
              appid: KEY
            }
          });
          this.setState({details : response.data});
          console.log(this.state)
    }


    render(){
    
    return (<div className="ui container" >
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <WeatherDetail details={this.state.details}/>
    </div>
    );
    }
}

export default App;