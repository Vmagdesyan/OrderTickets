import * as React from 'react';
import PropTypes from 'prop-types';

import { pluralForm, MAX_STOP, ALL_STOP } from '../../utils/common';

export const StopFilter = (props) => {
  const changeStopsFromForm = (e) => {
    const { changeStops } = props;

    return changeStops(e.target.value, e.target.checked);
  };

  const getStops = (numberStops) => {
    if (numberStops === 0) {
      return 'Без пересадок';
    }

    const titles = ['пересадка', 'пересадки', 'пересадок'];
    const pluralFormStop = pluralForm(numberStops, titles);

    return `${numberStops} ${pluralFormStop}`;
  };

  const {
    checkedStops,
  } = props;
  const maxNumberOfStop = MAX_STOP + 1;
  const isAllSelectedChecked = checkedStops.includes(-1);
  const isAllCheckboxChecked = checkedStops.length === maxNumberOfStop;

  return (
    <div className="checkbox-button">
      <div key="all-checkbox">
        <input
          type="checkbox"
          name="stops"
          value={-1}
          id="checkbox-all"
          checked={isAllSelectedChecked || (!isAllSelectedChecked && isAllCheckboxChecked)}
          onChange={changeStopsFromForm}
        />
        <label
          htmlFor="checkbox-all"
        >
          Все
        </label>
      </div>
      {
        ALL_STOP.map((x, i) => x !== -1 && (
          <div key={`stop-${x}`}>
            <input
              type="checkbox"
              name="stops"
              value={x}
              id={`checkbox-${i}`}
              checked={checkedStops.includes(x)}
              onChange={changeStopsFromForm}
            />
            <label htmlFor={`checkbox-${i}`}>{getStops(x)}</label>
          </div>
        ))
      }
    </div>
  );
};

StopFilter.propTypes = {
  changeStops: PropTypes.func,
  checkedStops: PropTypes.arrayOf(PropTypes.number),
};

StopFilter.defaultProps = {
  changeStops: () => {},
  checkedStops: [],
};
