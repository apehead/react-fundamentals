import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      input: '/* Add your JSX here */',
      output: '',
      error: ''
    };

    this.update = this.update.bind(this);
  }

  update(event) {
    const value = event.target.value;

    try {
      const output = babel.transform(value, {
        stage: 0,
        loose: 'all'
      }).code;

      this.setState({
        output,
        error: ''
      });
    } catch (error) {
      this.setState({
        output: '',
        error: error.message
      });
    }
  }

  renderError() {
    return this.state.error ? <header>{this.state.error}</header> : null;
  }

  render() {
    return (
      <section>
        {this.renderError()}
        <div className="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}
          />
          <pre>{this.state.output}</pre>
        </div>
      </section>
    );
  }

}

App.propTypes = {
};

export default App;
