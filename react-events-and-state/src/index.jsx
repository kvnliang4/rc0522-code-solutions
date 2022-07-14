import React from 'react';

import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    const isClicked = this.state.isClicked;
    let text;
    if (isClicked === true) {
      text = 'Thanks!';
    } else {
      text = 'Click Me!';
    }
    return (
      <button onClick={this.handleClick}>{text}</button>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
