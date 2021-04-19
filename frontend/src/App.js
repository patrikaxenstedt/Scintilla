import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';

import NotAuth from './components/guards/NotAuth';
import IsAuth from './components/guards/isAuth';

import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Content from './views/content';

import './App.css';

// TOKEN CHECKER
// Checks the local storage if there's a token, and if it still valid
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get suer info and expiration
  const decoded = jwtDecode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for epired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <NotAuth exact path="/login" component={Login} />
              <NotAuth exact path="/register" component={Register} />
              <IsAuth exact path="/content" component={Content} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
