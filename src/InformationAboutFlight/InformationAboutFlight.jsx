import React, {Component} from 'react'

export default class InformationAboutFlight extends Component {
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

        } = this.props;
        return (
            <p>ff</p>
        )
    }
}