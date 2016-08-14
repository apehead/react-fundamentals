import React from 'react';

const mixin = InnerComponent => class extends React.Component {

  constructor() {
    super();

    this.update = this.update.bind(this);
    this.state = { val: 0 };
  }

  update() {
    this.setState({
      val: ++this.state.val
    });
  }

  render() {
    return (
      <InnerComponent
        update={this.update}
        {...this.state}
        {...this.props}
      />
    );
  }

};

export default mixin;
