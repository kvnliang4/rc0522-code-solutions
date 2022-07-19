import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicks: 0 };
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    const timesClicked = this.state.clicks;
    const text = 'Hot Button';
    let buttonClass = '';

    if (timesClicked < 3) {
      buttonClass = 'initial';
    } else if (timesClicked < 6) {
      buttonClass = 'click3';
    } else if (timesClicked < 9) {
      buttonClass = 'click6';
    } else if (timesClicked < 12) {
      buttonClass = 'click9';
    } else if (timesClicked < 15) {
      buttonClass = 'click12';
    } else if (timesClicked < 18) {
      buttonClass = 'click15';
    } else if (timesClicked >= 18) {
      buttonClass = 'click18';
    }

    return (
      <button className={buttonClass} onClick={this.handleClick}>{text}</button>
    );
  }
}
