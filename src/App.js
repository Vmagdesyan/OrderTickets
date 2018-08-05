import React, { Component } from 'react'

import './App.css'
import data from './data/tickets.json'
import LogoImg from './img/Logo.png'

import FlightTable from './FlightTable/FlightTable'
import BlockForChangeCurrencyAndStops from './BlockForChangeCurrencyAndStops/BlockForChangeCurrencyAndStops'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'RUB',
      tickets: data.tickets,
      allCurrency: ['RUB', 'USD', 'EUR'],
      maxStops: 3,
      checkedStops: [-1]
    }
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
  }
  getCurrencyMultiplier = () => {
    const currCurrency = this.state.currency;

    switch (currCurrency) {
      case 'RUB':
        return 1;
      case 'USD':
        return 1 / 63;
      case 'EUR':
        return 1 / 73;
      default:
        return 1;
    }
  }
  handleChangeCurrency = (str) => {
    if (!(str && this.state.allCurrency.indexOf(str) !== -1))
      return;
    if (str === this.state.currency)
      return;
    this.setState({
      currency: str
    })
  }
  hadleChangeStops = (stops, isChecked) => {
    if (isChecked) {
      if (+stops === -1) {
        let allStops = [...Array(this.state.maxStops + 1)].map((x, i) => x = i);
        allStops.push(-1);
        this.setState({
          checkedStops: allStops
        });
      }
      else
        this.setState({
          checkedStops: [...this.state.checkedStops.filter(stop => stop !== -1), +stops]
        });
    }
    else
      this.setState({
        checkedStops: this.state.checkedStops.filter(stop => stop !== +stops && stop !== -1)
      })
  }
  render() {
    return (
      <div>
        <div className='divForLogo'><img src={LogoImg} alt='Логотип'/></div>
        <div className="App">
        
          <BlockForChangeCurrencyAndStops
            allCurrency={this.state.allCurrency}
            currCurrency={this.state.currency}
            changeCurrency={this.handleChangeCurrency}
            maxStops={this.state.maxStops}
            checkedStops={this.state.checkedStops}
            changeStops={this.hadleChangeStops}
          />
          <FlightTable
            listWithFlights={this.state.tickets}
            currencyMultiplier={this.getCurrencyMultiplier()}
            currency={this.state.currency}
            checkedStops={this.state.checkedStops}
          />
        </div>
      </div>
    );
  }
}

export default App;
