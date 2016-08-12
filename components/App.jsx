import React, { PropTypes } from 'react';

import ColorSelectorContainer from './ColorSelectorContainer';
import { getRgbaColor, setElementColor } from '../helpers/color';

const RGB_COLOR_INITIAL_VALUE = 255;
const RGB_ALPHA_INITIAL_VALUE = 1;

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      red: RGB_COLOR_INITIAL_VALUE,
      green: RGB_COLOR_INITIAL_VALUE,
      blue: RGB_COLOR_INITIAL_VALUE,
      alpha: RGB_ALPHA_INITIAL_VALUE
    };

    this.update = this.update.bind(this);
    this.reset = this.reset.bind(this);
    this.apply = this.apply.bind(this);
  }

  update(color, value) {
    this.setState({ [color]: value });
  }

  reset() {
    this.setState({
      red: RGB_COLOR_INITIAL_VALUE,
      green: RGB_COLOR_INITIAL_VALUE,
      blue: RGB_COLOR_INITIAL_VALUE,
      alpha: RGB_ALPHA_INITIAL_VALUE
    }, this.apply);
  }

  apply() {
    const { red, green, blue, alpha } = this.state;
    const color = getRgbaColor({ red, green, blue, alpha });
    setElementColor(document.body, color);
  }

  render() {
    return (
      <section>
        <h2>{this.props.message}</h2>
        <hr />

        <ColorSelectorContainer
          red={this.state.red}
          green={this.state.green}
          blue={this.state.blue}
          alpha={this.state.alpha}
          update={this.update}
          reset={this.reset}
          apply={this.apply}
        />

      </section>
    );
  }

}

App.propTypes = {
  message: PropTypes.string
};

export default App;
