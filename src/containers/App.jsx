import React, { PropTypes } from 'react';

import Mixin from '../components/Mixin';

const Button = props => <button onClick={props.update}>{props.txt} - {props.val}</button>;

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired
};

const Span = props => <span onMouseMove={props.update}>{props.txt} - {props.val}</span>;

Span.propTypes = {
  txt: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired
};

const ButtonMixed = Mixin(Button);
const SpanMixed = Mixin(Span);

const App = () => (
  <div>
    asjals
    <ButtonMixed txt="Button" />
    <SpanMixed txt="Span" />
  </div>
);

export default App;
