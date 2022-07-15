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
    if (timesClicked < 3) {
      return (
        <button className='initial' onClick={this.handleClick}>{text}</button>
      );
    } else if (timesClicked < 6) {
      return (
        <button className='click3' onClick={this.handleClick}>{text}</button>
      );
    } else if (timesClicked < 9) {
      return (
        <button className='click6' onClick={this.handleClick}>{text}</button>
      );
    } else if (timesClicked < 12) {
      return (
        <button className='click9' onClick={this.handleClick}>{text}</button>
      );
    } else if (timesClicked < 15) {
      return (
        <button className='click12' onClick={this.handleClick}>{text}</button>
      );
    } else if (timesClicked < 18) {
      return (
        <button className='click15' onClick={this.handleClick}>{text}</button>
      );
    } else if (timesClicked >= 18) {
      return (
        <button className='click18' onClick={this.handleClick}>{text}</button>
      );
    }
  }
}
