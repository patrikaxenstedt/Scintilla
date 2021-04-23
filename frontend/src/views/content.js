import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Banner from '../components/Banner';
import Hero from '../components/Hero';

import Bouncing from '../components/Bouncing';

class Content extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return (
        <>
          <Hero>
            <Banner title="Hi,Hello,Welcome"></Banner>
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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Content);
