import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Checks if user is authenticated and then checks the role if its admin. If correnct, redirect to /content otherwise to /login
const IsAdmin = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true ? (
        auth.user.role === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/content" />
        )
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

IsAdmin.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(IsAdmin);
