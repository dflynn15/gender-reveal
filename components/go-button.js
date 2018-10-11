import React, { Component } from 'react';
import axios from 'axios';

const callServer = () => {
  axios.post('/increment');
};

export default class GoButton extends Component {
  render() {
    return (
      <button className={'mdc-button--raised'} onClick={callServer}>
        Go!
      </button>
    );
  }
}
