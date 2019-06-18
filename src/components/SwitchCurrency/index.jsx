import * as React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export const SwitchCurrency = (props) => {
  const {
    allCurrency,
    currentCurrency,
    changeCurrency,
  } = props;

  return (
    <>
      <p id="currencyText">ВАЛЮТА</p>
      <div className="radio-buttons">
        {
          allCurrency.map((item, index) => (
            <div key={item}>
              <input
                type="radio"
                name="currency"
                value={item}
                id={`radio-${index}`}
                checked={currentCurrency === item}
                onChange={() => changeCurrency(item)}
              />
              <label
                htmlFor={`radio-${index}`}
              >
                {item}
              </label>
            </div>
          ))
        }
      </div>
    </>
  );
};

SwitchCurrency.propTypes = {
  changeCurrency: PropTypes.func,
  allCurrency: PropTypes.arrayOf(PropTypes.string),
  currentCurrency: PropTypes.string,
};

SwitchCurrency.defaultProps = {
  changeCurrency: () => { },
  allCurrency: [],
  currentCurrency: '',
};
