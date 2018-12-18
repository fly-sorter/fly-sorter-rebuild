import React from 'react';
import './signin.scss';
import logo from '../../assets/logo.png';

class Login extends React.Component {
  render() {
    return (
      <div className="centered">
        <img src={logo} alt="the logo of fly sorter" />
        <div className="signin">
          <form>
            <li>
              <label for="username">User Name</label>
              <input
                type="text"
                placeholder="please enter your username"
                name="username"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="please enter your password"
                name="password"
                onChange={this.handleChange}
              />
            </li>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
} //end class LOGIN

export default Login;
