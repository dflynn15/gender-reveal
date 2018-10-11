import React, { Component } from 'react';
import axios from 'axios';

const callServer = () => {
  axios.post('/increment');
};

export default class GoButton extends Component {
  render() {
    let { enabled } = this.props;
    return (
      <button
        className={'hero-button mdc-button mdc-button--unelevated'}
        onClick={callServer}
        disabled={!enabled}
      >
        Go!
      </button>
    );
  }
}
