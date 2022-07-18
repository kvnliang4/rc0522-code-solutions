import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    const isClicked = this.state.isClicked;
    if (isClicked === false) {
      this.setState({
        isClicked: true
      });
    } else {
      this.setState({
        isClicked: false
      });
    }
  }

  render() {
    const isClicked = this.state.isClicked;
    let overlay;
    let menu;
    let icon;

    if (isClicked === false) {
      overlay = 'overlay hidden fade-in';
      menu = 'menu hidden';
      icon = 'fa-solid fa-bars';
    } else {
      overlay = 'overlay';
      menu = 'menu';
      icon = 'fa-solid fa-bars hidden';
    }

    return (
      <div>
        <i className={icon} onClick={this.handleClick}></i>
        <div>
          <ul className={menu}>
            <li onClick={this.handleClick}><h1>Menu</h1></li>
            <li onClick={this.handleClick}>About</li>
            <li onClick={this.handleClick}>Get Started</li>
            <li onClick={this.handleClick}> Sign In</li>
          </ul>
          <div className={overlay} onClick={this.handleClick}></div>
        </div>
      </div>
    );
  }
}
