import * as React from 'react';
import PropTypes from 'prop-types';

import { pluralForm } from '../../utils/common';

import Airplane from '../../img/Airplane.png';

import './index.css';

export class FlightInformation extends React.Component {
  createDateFromString = (str) => {
    if (!str) {
      return '';
    }
    const dataDate = str.split('.');

    return new Date(`20${dataDate[2]}`, dataDate[1] - 1, dataDate[0]);
  }

  getStops = (numberStops) => {
    if (!numberStops) return '';
    const titles = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'];
    return `${numberStops} ${pluralForm(numberStops, titles)}`;
  }

  render() {
    const {
      origin,
      originName,
      destination,
      destinationName,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      stops,
    } = this.props;
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн',
      'июл', 'авг', 'сент', 'окт', 'ноя', 'дек'];
    const dprDate = this.createDateFromString(departureDate);
    const arrDate = this.createDateFromString(arrivalDate);
    return (
      <div className="InformationAboutFlight">
        <div className="divForDateAndTime">
          <div className="timeForFlight">
            <a
              href="/"
            >
              {departureTime}
            </a>
          </div>
          <div className="dateForFlight">
            <p>{`${origin}, ${originName}`}</p>
            <p>{`${dprDate.getDate()} ${months[dprDate.getMonth()]} ${dprDate.getFullYear()}, ${days[dprDate.getDay()]}`}</p>
          </div>
        </div>
        <div className="divForStops">
          <div className="blockForStops">
            {this.getStops(stops)}
          </div>
          <div className="divForLine">
            <div className="lineForStops" />
            <div className="divForImg">
              <img src={Airplane} alt="линия" />
            </div>
          </div>
        </div>
        <div className="divForDateAndTime">
          <div className="timeForFlight">
            {' '}
            <a
              href="/"
            >
              {arrivalTime}
            </a>
            {' '}
          </div>
          <div className="dateForFlight">
            <p>{`${destination}, ${destinationName}`}</p>
            <p>{`${arrDate.getDate()} ${months[arrDate.getMonth()]} ${arrDate.getFullYear()}, ${days[arrDate.getDay()]}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

FlightInformation.propTypes = {
  origin: PropTypes.string,
  originName: PropTypes.string,
  destination: PropTypes.string,
  destinationName: PropTypes.string,
  departureDate: PropTypes.string,
  departureTime: PropTypes.string,
  arrivalDate: PropTypes.string,
  arrivalTime: PropTypes.string,
  stops: PropTypes.number,
};

FlightInformation.defaultProps = {
  origin: '',
  originName: '',
  destination: '',
  destinationName: '',
  departureDate: '',
  departureTime: '',
  arrivalDate: '',
  arrivalTime: '',
  stops: 0,
};
