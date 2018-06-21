import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { UserConsumer } from '../contexts/UserContext'
import UserForm from '../components/UserForm'

class LoginFormContainer extends Component {
  state = {
    success: false
  }
  render() {
    if (this.state.success) {
      return (
        <Redirect to='/post'/>
      )
    } else {
      return (
        <UserConsumer>
          {({login}) => (
            <UserForm onSubmitUser={async (username, password) => {
              await login(username, password);
              this.setState({success: true});
            }} buttonText={'Login'}/>
          )}
        </UserConsumer>
      );
    }
  }
}

export default LoginFormContainer;