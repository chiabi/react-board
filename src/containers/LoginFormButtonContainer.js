import React, { Component } from 'react';

import { UserConsumer } from '../contexts/UserContext'
import UserFormButton from '../components/UserFormButton'

class LoginFormContainer extends Component {
  render() {
    return (
      <UserConsumer>
        {({
          login
        }) => (
          <UserFormButton onSubmitUser={login}/>
        )}
      </UserConsumer>
    );
  }
}

export default LoginFormContainer;