import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Banner from '../Banner';
import Hero from '../Hero';
import Services from '../Services';

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
            <Banner title="Welcome" subtitle={user.name}>
              <a onClick={this.onLogout.bind(this)} href="/logout">
                Logout
              </a>
            </Banner>
          </Hero>
          <div className="center-svg">
            <svg
              class="scroll-down"
              fill="#fff"
              height="75"
              viewBox="0 0 24 24"
              width="75"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
              <path d="M0-.75h24v24H0z" fill="none" />
            </svg>
          </div>
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
