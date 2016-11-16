import React, { PropTypes } from 'react';

export default class Component extends React.Component {
  static propTypes = {
    msg: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>{ this.props.msg }</div>
    );
  }
}
