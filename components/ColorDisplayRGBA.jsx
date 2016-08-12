import React, { PropTypes } from 'react';

import { getRgbaColor, getHexColor } from '../helpers/color';

const ColorDisplayRGBA = props => {
  const { red, green, blue, alpha } = props;
  const hexColor = getHexColor({ red, green, blue });
  const rgbaColor = getRgbaColor({ red, green, blue, alpha });

  const styleDisplayContainer = {
    height: 50,
    width: 50,
    backgroundColor: 'white'
  };

  const styleDisplay = {
    height: 50,
    width: 50,
    border: '1px solid',
    backgroundColor: rgbaColor
  };

  return (
    <div data-role="color-display-rgb">
      <h5>{hexColor}</h5>
      <div style={styleDisplayContainer}>
        <div style={styleDisplay} />
      </div>
    </div>
  );
};

ColorDisplayRGBA.propTypes = {
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired,
  alpha: PropTypes.number.isRequired
};

export default ColorDisplayRGBA;
