import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.HandlePassword = this.HandlePassword.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.state = { password: '', message: '', symbol: '' };
  }

  HandlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  HandleSubmit(event) {
    event.preventDefault();
    const password = this.state.password;

    if (password.length === 0) {
      this.setState({
        message: 'A password is required.'
      });

      this.setState({
        symbol: 'fa-solid fa-xmark red'
      });
    } else if (password.length < 8) {
      this.setState({
        message: 'Your password is too short.'
      });

      this.setState({
        symbol: 'fa-solid fa-xmark red'
      });
    } else if (password.length >= 8) {
      this.setState({
        message: ''
      });

      this.setState({
        symbol: 'fa-solid fa-check green'
      });
    }
  }

  render() {
    const password = this.state.password;
    const message = this.state.message;
    const symbol = this.state.symbol;

    return (
    <form onSubmit={this.HandleSubmit}>
      <label>Password</label>
      <div>
          <input type="password" value={password} onChange={this.HandlePassword} />
        <i className={symbol}></i>
      </div>
      <span>{message}</span>
    </form>
    );
  }

}
