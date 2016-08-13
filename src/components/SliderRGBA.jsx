import React, { PropTypes } from 'react';

import Slider from './Slider';

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

        <div data-role="slider-rgba-red">
          <Slider
            min={COLOR_MIN}
            max={COLOR_MAX}
            value={this.props.red}
            update={e => { this.handleChange(e, 'red'); }}
          />
          R: {this.props.red}
        </div>

        <br />

        <div data-role="slider-rgba-green">
          <Slider
            min={COLOR_MIN}
            max={COLOR_MAX}
            value={this.props.green}
            update={e => { this.handleChange(e, 'green'); }}
          />
          G: {this.props.green}
        </div>

        <br />

        <div data-role="slider-rgba-blue">
          <Slider
            min={COLOR_MIN}
            max={COLOR_MAX}
            value={this.props.blue}
            update={e => { this.handleChange(e, 'blue'); }}
          />
          B: {this.props.blue}
        </div>

        <br />

        <div data-role="slider-rgba-alpha">
          <Slider
            min={ALPHA_MIN}
            max={ALPHA_MAX}
            step={ALPHA_STEP}
            value={this.props.alpha}
            update={e => { this.handleChange(e, 'alpha'); }}
          />
          alpha: {this.props.alpha}
        </div>

        <br />

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
