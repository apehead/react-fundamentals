import React, { PropTypes } from 'react';

import SliderRGBA from '../components//SliderRGBA';
import ColorDisplayRGBA from '../components/ColorDisplayRGBA';
import Button from '../components/Button';

const ColorSelectorContainer = props => (
  <div data-role="color-selector-container">

    <SliderRGBA
      red={props.red}
      green={props.green}
      blue={props.blue}
      alpha={props.alpha}
      update={props.update}
    />

    <ColorDisplayRGBA
      red={props.red}
      green={props.green}
      blue={props.blue}
      alpha={props.alpha}
    />

    <br />

    <Button onClick={props.reset}>Reset</Button>
    <Button onClick={props.apply}>Apply</Button>

  </div>
);

ColorSelectorContainer.propTypes = {
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired,
  alpha: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  apply: PropTypes.func.isRequired
};

export default ColorSelectorContainer;
