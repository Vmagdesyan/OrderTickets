import React, { Component } from 'react';

import Button from '../Button/Button'
import InformationAboutFlight from '../InformationAboutFlight/InformationAboutFlight'

import LogoNormal from '../img/LogoNormal.png'
import './FlightTable.css';
class FlightTable extends Component {
  render() {
    const {listWithFlights} = this.props;
    return (
      <div className="FlightTable">
        { 
          listWithFlights.map((item, index) => (
            <div
              key={index}
            >
              <div id='logo'>
                <img  src={LogoNormal} alt='Логотип'/>
              </div>
              <InformationAboutFlight/>
              <div>
                <Button 
                  id='buttonForBuy'
                  idText='textInButton' 
                >
                  Купить за {String(item.price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽
                </Button>
              </div>

            </div>
          ))
        }
          
      </div>
      
    );
  }
}

export default FlightTable;
