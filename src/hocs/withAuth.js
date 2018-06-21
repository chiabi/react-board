import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

const withAuth = (redirectPath) => (WrappedComponent) => (
  class extends Component {
    render() {
      return (
        localStorage.getItem('token') ?
          <WrappedComponent {...this.props}/> : 
          <Redirect to={redirectPath}/>
      )
    }
  }
)

export default withAuth;