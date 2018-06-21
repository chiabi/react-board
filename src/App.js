import React, { Component } from 'react';

import { UserProvider } from './contexts/UserContext'
import { PostProvider } from './contexts/PostContext'
import LoginPage from './pages/LoginPage'
import BoardListPage from './pages/BoardListPage'

class App extends Component {
  render() {
    return (
      <PostProvider>
        <UserProvider>
          <div className="App">
            <LoginPage />
            <BoardListPage />
          </div>
        </UserProvider>
      </PostProvider>
    );
  }
}

export default App;
