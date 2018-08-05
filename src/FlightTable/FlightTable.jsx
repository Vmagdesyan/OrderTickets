import React, { Component } from 'react';

import Button from '../Button/Button'
import InformationAboutFlight from '../InformationAboutFlight/InformationAboutFlight'

import LogoNormal from '../img/LogoNormal.png'
import './FlightTable.css';
class FlightTable extends Component {
  render() {
    const {
        listWithFlights,
        currencyMultiplier, 
        currency,
        checkedStops
      } = this.props;
    return (
      <div className="FlightTable">
        { 
          listWithFlights
            .filter((item) => checkedStops.indexOf(-1) !== -1 ? true : checkedStops.indexOf(item.stops) !== -1)
            .sort((a, b) => a.stops > b.stops ? 1 : (a.stops === b.stops) ? 0 : -1)
            .sort((a, b) => a.price > b.price ? 1 : (a.price === b.price) ? 0 : -1)
            .map((item, index) => (
            <div
              key={index + 'table'}
              className='tableForTickets'
            >
              <div>
                <div id='logo'>
                  <img  src={LogoNormal} alt='Логотип'/>
                </div>
                
                <div>
                  <Button 
                    className='buttonForBuy'
                    idText='textInButton' 
                  >
                    Купить за {String((item.price * currencyMultiplier).toFixed(0)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
                    {currency === 'RUB' ? ' ₽' : ( currency === 'EUR' ? ' €' : ' $')} 
                  </Button>
                </div>
              </div>
              <InformationAboutFlight
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
  }
}

export default FlightTable;
