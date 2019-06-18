import React, { useState } from 'react';

import { FlightTable } from '../FlightTable';
import { FilterBlock } from '../FilterBlock';

import data from '../../data/tickets.json';
import LogoImg from '../../img/Logo.png';

import { MAX_STOP, ALL_CURRENCY, ALL_STOP } from '../../utils/common';

import './index.css';

export const OrderTicket = () => {
  const [currency, setCurrency] = useState('RUB');
  const [checkedStops, setCheckedStop] = useState(ALL_STOP);
  const { tickets } = data;

  const getCurrencyMultiplier = () => {
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
  };

  const handleChangeCurrency = (str) => {
    if (!str || str === currency || !ALL_CURRENCY.includes(str)) {
      return;
    }

    setCurrency(str);
  };

  const hadleChangeStops = (stops, isChecked) => {
    if (isChecked) {
      if (Number(stops) === -1) {
        setCheckedStop(ALL_STOP);
      } else {
        const newCheckedStops = checkedStops.length === MAX_STOP + 1
          ? ALL_STOP
          : [...checkedStops.filter(stop => stop !== -1), Number(stops)];
        setCheckedStop(newCheckedStops);
      }
    } else {
      setCheckedStop(checkedStops.filter(stop => stop !== Number(stops) && stop !== -1));
    }
  };

  return (
    <div>
      <div className="divForLogo">
        <img src={LogoImg} alt="Логотип" />
      </div>
      <div className="App">
        <FilterBlock
          allCurrency={ALL_CURRENCY}
          currentCurrency={currency}
          changeCurrency={handleChangeCurrency}
          maxStops={MAX_STOP}
          checkedStops={checkedStops}
          changeStops={hadleChangeStops}
        />
        <FlightTable
          listWithFlights={tickets}
          currencyMultiplier={getCurrencyMultiplier()}
          currency={currency}
          checkedStops={checkedStops}
        />
      </div>
    </div>
  );
};
