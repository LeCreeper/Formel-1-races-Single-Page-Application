import React, { Component } from 'react';
import Header from './Header'
import DriverList from './DriverList';
import RaceList from './RaceList';
import { Route } from 'react-router-dom'

// Denne klasse fortolker de forskellige components.
class App extends Component {
  render() {
    return (    
      <div className="App">
        <header className="App-header">
          <Header/>
          <Route exact path="/" component={DriverList}  />
          <Route path="/Racelist" component={RaceList}  />
            
        </header>      
      </div> 
    );
  }
}

export default App;
