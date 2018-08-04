import React, {Component} from 'react'

export default class Button extends Component {
    render(){
        const {
            onClick,
            className = '',
            id = '',
            children,
            idText = ''
        } = this.props;
        return(
            <button
                onClick = {onClick}
                className = {className}
                id = {id}
                type = "button"
            >
                <h6 id={idText}>
                    {children}
                </h6>
            </button>
        )
    }
}
