import React, { Component, Fragment } from 'react';
import Status from './status';
import GoButton from './go-button';

export default class Reveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
    };
  }

  render() {
    let { percentage } = this.state;
    let enabled = percentage < 100;
    return (
      <Fragment>
        <Status sqSize={200} strokeWidth={10} percentage={percentage} />
        <GoButton enabled={enabled} />
      </Fragment>
    );
  }
}
