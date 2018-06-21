import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

const withAuth = (redirectPath, auth = true) => (WrappedComponent) => (
  class extends Component {
    render() {
      const predicate = auth && localStorage.getItem('token')
      return (
        predicate ?
          <WrappedComponent {...this.props}/> : 
          <Redirect to={redirectPath}/>
      )
    }
  }
)

export default withAuth;