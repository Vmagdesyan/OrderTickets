import React, {Component} from 'react'

import './BlockForChangeCurrencyAndStops.css'

export default class BlockForChangeCurrencyAndStops extends Component {
    
    changeStopsFromForm = (e) => {
        this.props.changeStops(e.target.value, e.target.checked);
    }
    getStops = (numberStops) => {
        if (!numberStops)
            return 'Без пересадок';
        const titles = ['пересадка', 'пересадки', 'пересадок'];
        const cases = [2, 0, 1, 1, 1, 2];
        return `${numberStops} ${titles[(numberStops % 100 > 4 && numberStops % 100 < 20) ? 2 : cases[(numberStops % 10 < 5) ? numberStops % 10 : 5]]}`;
    }
    render(){
        const {
            allCurrency,
            radioButtonClass,
            currCurrency,
            changeCurrency,
            maxStops,
            checkedStops,
            checkBoxButtonClass
        } = this.props;
        return(
            <div id='filterCurrency'>
                <div className='currency'>
                    <p id='currencyText'>ВАЛЮТА</p>
                </div>
                <div className='radio_buttons'>
                    {
                        allCurrency.map((item, index) => (
                            <div key={`${index}-radio`}>
                                <input
                                    type='radio'
                                    name='currency'
                                    value={item}
                                    className={radioButtonClass}
                                    id={`radio-${index}`}
                                    checked={currCurrency === item}
                                    onChange={() => { changeCurrency(item) }}
                                />
                                <label htmlFor={`radio-${index}`}>{item}</label>
                            </div>
                        ))
                    }
                </div>
                <div className='checkbox_button'>
                <div key={`all-checkbox`}>
                    <input
                        type='checkbox'
                        name='stops'
                        value={-1}
                        className={checkBoxButtonClass}
                        id={`checkbox-all`}
                        checked={checkedStops.includes(-1)}
                        onChange={this.changeStopsFromForm}
                    />
                    <label htmlFor={`checkbox-all`}>Все</label>
                </div>
                {
                    [...Array(maxStops + 1)].map((x, i) =>
                        <div key={`${i}-checkbox`}>
                            <input
                                type='checkbox'
                                name='stops'
                                value={i}
                                className={checkBoxButtonClass}
                                id={`checkbox-${i}`}
                                checked={checkedStops.includes(i)}
                                onChange={this.changeStopsFromForm}
                            />
                            <label htmlFor={`checkbox-${i}`}>{this.getStops(i)}</label>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}