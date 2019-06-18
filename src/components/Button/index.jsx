import * as React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const {
    onClick,
    className,
    id,
    children,
    idText,
  } = props;

  return (
    <button
      onClick={onClick}
      className={className}
      id={id}
      type="button"
    >
      <h6 id={idText}>
        {children}
      </h6>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string || PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.element),
  ]),
  idText: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  id: '',
  children: null,
  idText: '',
};
