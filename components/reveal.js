import React, { Component, Fragment } from 'react';
import Status from './status';
import GoButton from './go-button';

export default class Reveal extends Component {
  constructor(props) {
    super(props);
    this.socket = props.socket;
    this.state = {
      percentage: props.percentage || 0,
    };
  }

  componentDidMount() {
    this.socket.on('percentage', ({ percentage }) => {
      this.setState({
        percentage,
      });
    });
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
