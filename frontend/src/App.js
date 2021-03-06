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

import Home from './pages/Home';
import ContentPage from '../src/pages/Content';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminPage from './pages/AdminPage';
import User from './pages/User';
import EditUser from './pages/EditUser';
import AddUser from './pages/AddUser';
import NotFound from './pages/NotFound';
import Rockets from './pages/Rockets';
import RocketDetails from './pages/RocketDetails';
import { RocketsContextProvider } from './contexts/RocketsContext';

import Navbar from './components/Navbar/Nav';

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
// All routes down here. Some of them requires that your role is admin.
class App extends Component {
  render() {
    return (
      <RocketsContextProvider>
        <Provider store={store}>
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <NotAuth exact path="/login" component={Login} />
                <NotAuth exact path="/register" component={Register} />
                <IsAuth exact path="/content" component={ContentPage} />
                <IsAuth exact path="/rockets" component={Rockets} />
                <IsAuth
                  exact
                  path="/rockets/:rocketId"
                  component={RocketDetails}
                />
                <IsAdmin exact path="/admindashboard" component={AdminPage} />
                <IsAdmin exact path="/add" component={AddUser} />
                <IsAdmin exact path="/users/:id" component={User} />
                <IsAdmin exact path="/users/:id/edit" component={EditUser} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </RocketsContextProvider>
    );
  }
}

export default App;
