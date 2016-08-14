import React, { PropTypes } from 'react';

const NumInput = props => {
  const label = props.label !== '' ?
    <label htmlFor={props.id}>{props.label}: {props.value}</label> : '';

  return (
    <div data-role="numInput">
      <input
        type={props.type}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.update}
        value={props.value}
      />
      {label}
    </div>
  );
};

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 10,
  value: 0,
  label: '',
  type: 'range'
};

NumInput.propTypes = {
  id: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  label: PropTypes.string,
  update: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['number', 'range'])
};

export default NumInput;
