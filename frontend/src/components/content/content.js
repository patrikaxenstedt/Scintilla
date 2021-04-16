import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Banner from '../Banner';
import Hero from '../Hero';
import Services from '../Services';
import Bouncing from '../Bouncing';

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
              <a onClick={this.onLogout.bind(this)} href="/logout">
                Logout
              </a>
            </Banner>
          </Hero>
          <Bouncing />
          <Services />
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
