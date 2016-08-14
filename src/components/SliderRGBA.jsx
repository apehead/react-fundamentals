import React, { PropTypes } from 'react';

import NumInput from './NumInput';

const COLOR_MIN = 0;
const COLOR_MAX = 255;
const ALPHA_MIN = 0;
const ALPHA_MAX = 1;
const ALPHA_STEP = 0.01;

class SliderRGBA extends React.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, color) {
    const value = color === 'alpha' ?
      parseFloat(event.target.value, 10) : parseInt(event.target.value, 10);

    this.props.update(color, value);
  }

  render() {
    return (
      <div data-role="slider-rgba">

        <NumInput
          id="red"
          min={COLOR_MIN}
          max={COLOR_MAX}
          type="range"
          value={this.props.red}
          label="Red"
          update={e => { this.handleChange(e, 'red'); }}
        />

        <NumInput
          id="green"
          min={COLOR_MIN}
          max={COLOR_MAX}
          type="range"
          value={this.props.green}
          label="Green"
          update={e => { this.handleChange(e, 'green'); }}
        />

        <NumInput
          id="blue"
          min={COLOR_MIN}
          max={COLOR_MAX}
          type="range"
          value={this.props.blue}
          label="Blue"
          update={e => { this.handleChange(e, 'blue'); }}
        />

        <NumInput
          id="alpha"
          min={ALPHA_MIN}
          max={ALPHA_MAX}
          step={ALPHA_STEP}
          type="range"
          value={this.props.alpha}
          label="Alpha"
          update={e => { this.handleChange(e, 'alpha'); }}
        />

      </div>
    );
  }

}

SliderRGBA.propTypes = {
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired,
  alpha: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired
};

export default SliderRGBA;
