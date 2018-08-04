import React, { Component } from 'react';
import './App.css';
import data from './data/tickets.json'
import FlightTable from './FlightTable/FlightTable'
class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightTable
          listWithFlights = {data.tickets}
        />
      </div>
      
    );
  }
}

export default App;
