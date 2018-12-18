import React from 'react';
import { Redirect } from 'react-router-dom';

class AuthRedirect extends React.Component {
  render() {
    const { token } = this.props;

    return (
      <div>
        {!token ? <Redirect to="/signin" /> : <Redirect to="/dashboard" />}
      </div>
    );
  }
}

export default AuthRedirect;
