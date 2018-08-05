import React, {Component} from 'react'

import './InformationAboutFlight.css'

import Airplane from '../img/Airplane.png'
export default class InformationAboutFlight extends Component {

    createDateFromString = (str) => {
        const dataDate = str.split('.');
        return new Date(`20${dataDate[2]}`, dataDate[1] - 1, dataDate[0]);
    }
    getStops = (numberStops) => {
        if (!numberStops)
            return '';
        const titles = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'];
        const cases = [2, 0, 1, 1, 1, 2];
        return `${numberStops} ${titles[(numberStops % 100 > 4 && numberStops % 100 < 20) ? 2 : cases[(numberStops % 10 < 5) ? numberStops % 10 : 5]]}`;
    }
    render(){
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
            classForTime,
            classForInfAboutDate,
            idForStops,
            idForLine

        } = this.props;
        const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        const months = ["янв", "фев", "мар", "апр", "мая", "июн", 
            "июл", "авг", "сент", "окт", "ноя", "дек"];
        const dprDate = this.createDateFromString(departureDate);
        const arrDate = this.createDateFromString(arrivalDate);
        return (
            <div>
                <div>
                    <div
                        className={classForTime}
                    >
                        <a>
                            {departureTime}
                        </a>
                    </div>
                    <div
                        className={classForInfAboutDate}
                    >
                        <p>{`${origin}, ${originName}`}</p>
                        <p>{`${dprDate.getDate()} ${months[dprDate.getMonth()]} ${dprDate.getFullYear()}, ${days[dprDate.getDay()]}`}</p>
                    </div>
                </div>
                <div>
                    <div
                        id={idForStops}
                    >
                        {this.getStops(stops)}
                    </div>
                    <div>
                        <div id={idForLine}></div>
                        <div><img src={Airplane} alt='линия'/></div>
                    </div>
                </div>
                <div>
                    <div className={classForTime}> <a>{arrivalTime}</a> </div>
                    <div
                        className={classForInfAboutDate}
                    >
                        <p>{`${destination}, ${destinationName}`}</p>
                        <p>{`${arrDate.getDate()} ${months[arrDate.getMonth()]} ${arrDate.getFullYear()}, ${days[arrDate.getDay()]}`}</p>
                    </div>
                </div>
            </div>
        )
    }
}