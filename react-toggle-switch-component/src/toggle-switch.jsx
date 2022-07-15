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
    let text = '';

    if (switchOn === true) {
      text = 'ON';
      return (
        <div className="display-flex">
          <div className="container green">
            <button className="on" onClick={this.handleclick}></button>
          </div>
          <span>{text}</span>
        </div>
      );
    } else {
      text = 'OFF';
      return (
        <div className="display-flex">
          <div className="container">
            <button className="off" onClick={this.handleclick}></button>
          </div>
          <span>{text}</span>
        </div>
      );
    }
  }
}
