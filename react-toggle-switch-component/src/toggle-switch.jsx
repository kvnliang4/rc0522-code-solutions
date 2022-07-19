import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleclick = this.handleclick.bind(this);
    //    this.turnOn = this.turnOn.bind(this);
    //    this.turnOff = this.turnOff.bind(this);
    this.state = { switchOn: false };
  }

  handleclick() {
    if (this.state.switchOn === false) {
      this.setState({
        switchOn: true
      });
    } else {
      this.setState({
        switchOn: false
      });
    }
  }
  // turnOn() {
  //   this.setState({
  //     switchOn: true
  //   });
  // }

  // turnOff() {
  //   this.setState({
  //     switchOn: false
  //   });
  // }

  render() {
    const switchOn = this.state.switchOn;
    let status = 'off';
    let containerClass = '';

    if (switchOn === true) {
      status = 'on';
      containerClass = 'green';
    }

    return (
      <div className="display-flex">
        <div className={`container ${containerClass}`}>
          <button className={status} onClick={this.handleclick}></button>
        </div>
        <span>{status.toUpperCase()}</span>
      </div>
    );

  }
}
