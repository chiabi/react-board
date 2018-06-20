import React, { Component } from 'react';

import { UserConsumer } from '../contexts/UserContext'
import UserForm from '../components/UserForm'

class LoginFormContainer extends Component {
  render() {
    return (
      <UserConsumer>
        {({
          username,
          password,
          changeUsername,
          changePassword
        }) => (
          <UserForm 
            username={username} 
            password={password} 
            onChangeUsername={changeUsername}
            onChangePassword={changePassword}
          />
        )}
      </UserConsumer>
    );
  }
}

export default LoginFormContainer;