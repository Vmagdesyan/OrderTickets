import * as React from 'react';

import { FlightTable } from '../FlightTable';
import { FilterBlock } from '../FilterBlock';

import data from '../../data/tickets.json';
import LogoImg from '../../img/Logo.png';

import { MAX_STOP, ALL_CURRENCY, ALL_STOP } from '../../utils/common';

import './index.css';

export class OrderTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'RUB',
      tickets: data.tickets,
      checkedStops: ALL_STOP,
    };
  }

  getCurrencyMultiplier = () => {
    const { currency } = this.state;

    switch (currency) {
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
    const { currency } = this.state;

    if (!str || str === currency || !ALL_CURRENCY.includes(str)) {
      return;
    }

    this.setState({
      currency: str,
    });
  }

  hadleChangeStops = (stops, isChecked) => {
    if (isChecked) {
      if (Number(stops) === -1) {
        this.setState({
          checkedStops: ALL_STOP,
        });
      } else {
        this.setState(prevState => ({
          checkedStops: prevState.checkedStops.length === MAX_STOP + 1
            ? ALL_STOP
            : [...prevState.checkedStops.filter(stop => stop !== -1), Number(stops)],
        }));
      }
    } else {
      this.setState(prevState => ({
        checkedStops: prevState.checkedStops.filter(stop => stop !== Number(stops) && stop !== -1),
      }));
    }
  }

  render() {
    const {
      currency,
      checkedStops,
      tickets,
    } = this.state;

    return (
      <div>
        <div className="divForLogo">
          <img src={LogoImg} alt="Логотип" />
        </div>
        <div className="App">
          <FilterBlock
            allCurrency={ALL_CURRENCY}
            currentCurrency={currency}
            changeCurrency={this.handleChangeCurrency}
            maxStops={MAX_STOP}
            checkedStops={checkedStops}
            changeStops={this.hadleChangeStops}
          />
          <FlightTable
            listWithFlights={tickets}
            currencyMultiplier={this.getCurrencyMultiplier()}
            currency={currency}
            checkedStops={checkedStops}
          />
        </div>
      </div>
    );
  }
}
