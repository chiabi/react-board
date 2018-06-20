import React, { Component } from 'react';

import { UserProvider } from './contexts/UserContext'
import LoginPage from './pages/LoginPage'

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <LoginPage />
        </div>
      </UserProvider>
    );
  }
}

export default App;
