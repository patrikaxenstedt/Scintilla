import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Banner from '../components/Banner';
import Hero from '../components/Hero';

class ContentPage extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return (
        <>
          <Hero>
            <Banner title="Title"></Banner>
          </Hero>
        </>
      );
    }
  }
}

ContentPage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ContentPage);
