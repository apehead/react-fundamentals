import React, { PropTypes } from 'react';

const Slider = props => (
  <div data-role="slider">
    <input
      type="range"
      min={props.min}
      max={props.max}
      step={props.step}
      onChange={props.update}
      value={props.value}
    />
  </div>
);

Slider.defaultProps = {
  step: 1
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired
};

export default Slider;
