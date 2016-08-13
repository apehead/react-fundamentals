import React, { PropTypes } from 'react';

const Button = props => (
  <button onClick={props.onClick}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
