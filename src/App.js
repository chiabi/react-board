import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext'
import LoginPage from './pages/LoginPage'
import PostListPage from './pages/PostListPage'
import PostViewPage from './pages/PostViewPage'
import PostWritePage from './pages/PostWritePage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <div className="App">
            <Switch>
              <Route path="/login" component={LoginPage}/>
              <Route exact path="/" component={PostListPage}/>
              <Route path="/new" component={PostWritePage} />
              <Route path="/:postId" component={PostViewPage} />
            </Switch>
          </div>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;