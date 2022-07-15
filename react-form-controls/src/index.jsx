import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: '' };
    this.state = { password: '' };
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const user = this.state.username;
    const pass = this.state.password;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={user} onChange={this.handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="text" value={pass} onChange={this.handlePasswordChange} />
        </label>
        <button>Sign Up!</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
