import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
              <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route exact path="/" component={BoardListPage}/>
                <Route path="/post/:postId" component={({match}) => <BoardViewPage id={match.params.postId}/>} />
              </Switch>
            </div>
          </UserProvider>
        </PostProvider>
      </BrowserRouter>
    );
  }
}

export default App;