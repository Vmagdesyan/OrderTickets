import * as React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { FlightInformation } from '../FlightInformation';

import { getCurrencySymbol } from '../../utils/common';

import LogoNormal from '../../img/LogoNormal.png';

import './index.css';

export const FlightTable = (props) => {
  const {
    listWithFlights,
    currencyMultiplier,
    currency,
    checkedStops,
  } = props;

  return (
    <div className="flight-table">
      {
        listWithFlights
          .filter(item => (checkedStops.includes(-1)
            ? true
            : checkedStops.includes(item.stops)))
          .sort((a, b) => a.stops - b.stops)
          .sort((a, b) => a.price - b.price)
          .map(item => (
            <div
              key={`${item.id}table`}
              className="table-for-tickets"
            >
              <div>
                <div id="logo">
                  <img src={LogoNormal} alt="Логотип" />
                </div>
                <div>
                  <Button
                    className="button-for-buy"
                    idText="textInButton"
                  >
                    Купить за
                    {' '}
                    {String((item.price * currencyMultiplier).toFixed(0)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
                    {` ${getCurrencySymbol(currency)}`}
                  </Button>
                </div>
              </div>
              <FlightInformation
                origin={item.origin}
                originName={item.origin_name}
                destination={item.destination}
                destinationName={item.destination_name}
                departureDate={item.departure_date}
                departureTime={item.departure_time}
                arrivalDate={item.arrival_date}
                arrivalTime={item.arrival_time}
                stops={item.stops}
              />
            </div>
          ))
      }
    </div>
  );
};

FlightTable.propTypes = {
  listWithFlights: PropTypes.arrayOf(PropTypes.object),
  currencyMultiplier: PropTypes.number,
  currency: PropTypes.string,
  checkedStops: PropTypes.arrayOf(PropTypes.number),
};

FlightTable.defaultProps = {
  listWithFlights: [],
  currencyMultiplier: 1,
  currency: '',
  checkedStops: [],
};
