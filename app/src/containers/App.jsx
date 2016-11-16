import React from 'react';
import Component from '../components/Component';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      msg: "Hello World",
    };
  }

  render() {
    return (
      <div>
        <Component msg={ this.state.msg } />
      </div>
    )
  }
}
