import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import Banner from '../components/Banner';
import Hero from '../components/Hero';

import Bouncing from '../components/Bouncing';

class Content extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) {
      return (
        <>
          <Hero>
            <Banner title="Hi,Hello,Welcome" subtitle={user.name}>
              <button onClick={this.onLogout.bind(this)} href="/logout">
                Logout
              </button>
            </Banner>
          </Hero>
          <Bouncing />
        </>
      );
    }

    /*     return (
      <>
        {isAuthenticated ? (
          <Hero>
            <Banner title="Någon text här" subtitle="Bla bla bla">
              <p>
                Welcome! <b>{user.name}</b>
              </p>
              <a onClick={this.onLogout.bind(this)} href="/logout">
                Logout
              </a>
            </Banner>
          </Hero>
        ) : (
          <div></div>
        )}
      </>

    ); */
  }
}

Content.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Content);
