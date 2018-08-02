import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/tickets.json'
class App extends Component {
  render() {
    //const mydata = JSON.parse(data.tickets);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
        </p>
        <ul>
        {
          data.tickets.map(function(data){
            return <li>{data.departure_date} - {data.departure_time}</li>;
          })
        }
        </ul>
      </div>
      
    );
  }
}

export default App;
