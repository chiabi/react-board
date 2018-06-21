import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext'
import { PostProvider } from './contexts/PostContext'
import LoginPage from './pages/LoginPage'
import BoardListPage from './pages/BoardListPage'
import BoardViewPage from './pages/BoardViewPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PostProvider>
          <UserProvider>
            <div className="App">
              <Route path="/login" component={LoginPage}/>
              <Route exact path="/board" component={BoardListPage}/>
              <Route path="/board/view/:postId" component={({match}) => <BoardViewPage id={match.params.postId}/>} />
            </div>
          </UserProvider>
        </PostProvider>
      </BrowserRouter>
    );
  }
}

export default App;
