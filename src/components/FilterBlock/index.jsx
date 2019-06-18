import * as React from 'react';
import PropTypes from 'prop-types';

import { SwitchCurrency } from '../SwitchCurrency';
import { StopFilter } from '../StopFilter';

import { MAX_STOP } from '../../utils/common';

import './index.css';

export const FilterBlock = (props) => {
  const {
    allCurrency,
    currentCurrency,
    changeCurrency,
    changeStops,
    checkedStops,
  } = props;

  return (
    <div id="filter-currency">
      <SwitchCurrency
        allCurrency={allCurrency}
        currentCurrency={currentCurrency}
        changeCurrency={changeCurrency}
      />
      <StopFilter
        maxStops={MAX_STOP}
        checkedStops={checkedStops}
        changeStops={changeStops}
      />
    </div>
  );
};

FilterBlock.propTypes = {
  changeStops: PropTypes.func,
  changeCurrency: PropTypes.func,
  allCurrency: PropTypes.arrayOf(PropTypes.string),
  currentCurrency: PropTypes.string,
  checkedStops: PropTypes.arrayOf(PropTypes.number),
};

FilterBlock.defaultProps = {
  changeStops: () => {},
  changeCurrency: () => { },
  allCurrency: [],
  currentCurrency: '',
  checkedStops: [],
};
