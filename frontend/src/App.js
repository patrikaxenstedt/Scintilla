import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';

import NotAuth from './components/guards/NotAuth';
import IsAuth from './components/guards/isAuth';
import IsAdmin from './components/guards/isAdmin';

import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Content from './views/content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './views/NotFound';
import AdminPage from './views/AdminPage';

import './App.css';

// Checks the local storage if there's a token, and if it still valid
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwtDecode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for epired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <NotAuth exact path="/login" component={Login} />
              <NotAuth exact path="/register" component={Register} />
              <IsAuth exact path="/content" component={Content} />
              <IsAdmin exact path="/admindashboard" component={AdminPage} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
