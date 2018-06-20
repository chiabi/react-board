import React, { Component } from 'react';

import LoginFormContainer from '../containers/LoginFormContainer';
import LoginFormButtonContainer from '../containers/LoginFormButtonContainer';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginFormContainer />
        <LoginFormButtonContainer />
      </div>
    );
  }
}

export default LoginPage;