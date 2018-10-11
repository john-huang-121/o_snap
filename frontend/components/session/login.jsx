import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/logined'));
  }

  render () {
    return (
      <div className='session-form'>
        <form onSubmit={this.handleSubmit}>
          <h1>Log In!</h1>

          <label>username
            <input type='text' value={this.state.username}
            onChange={this.handleInput('username')} />
          </label>

          <label>Email
            <input type='email' value={this.state.email}
            onChange={this.handleInput('email')} />
          </label>

          <label>Password
            <input type='password' value={this.state.password}
            onChange={this.handleInput('password')} />
          </label>

          <input type='submit' value='Log In' />
        </form>
      </div>
    );
  }
}

export default Login;