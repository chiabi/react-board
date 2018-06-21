import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext'
import LoginPage from './pages/LoginPage'
import PostListPage from './pages/PostListPage'
import PostViewPage from './pages/PostViewPage'
import PostWritePage from './pages/PostWritePage'
import Error404 from './pages/Error404'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <div className="App">
            <Switch>
              <Route path="/login" component={LoginPage}/>
              <Route exact path="/post" component={PostListPage}/>
              <Route exact path="/post/write" component={PostWritePage} />
              <Route path="/post/:postId" component={PostViewPage} />
              <Route exact path='/' component={Home} />
              <Route component={Error404}/> 
            </Switch>
          </div>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

const Home = () => (
  localStorage.getItem('token') ? 
    <Redirect to="/post"/> :
    <Redirect to="/login"/>
)
export default App;