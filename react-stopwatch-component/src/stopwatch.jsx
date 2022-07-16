import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.stopStart = this.stopStart.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { start: false, ticks: 0 };
  }

  tick() {
    this.setState({
      ticks: this.state.ticks + 1
    });
  }

  stopStart() {
    const play = this.state.start;
    if (play === false) {
      this.intervalId = setInterval(() => this.tick(), 1000);
      this.setState({
        start: true
      });
    } else {
      clearInterval(this.intervalId);
      this.setState({
        start: false
      });
    }
  }

  reset() {
    const play = this.state.start;
    if (play === false) {
      this.setState({
        ticks: 0
      });
    }
    clearInterval(this.intervalId);
  }

  render() {
    const play = this.state.start;
    const seconds = this.state.ticks;
    let button = '';

    if (play === false) {
      button = 'fa fa-play';
    } else {
      button = 'fa fa-pause';
    }

    return (
      <div>
        <div className="container" onClick={this.reset}>
          <span>{seconds}</span>
        </div>
        <button className={button} onClick={this.stopStart}></button>
      </div>
    );
  }
}
