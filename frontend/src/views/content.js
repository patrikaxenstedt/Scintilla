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
            <Banner title="Title, might remove this laster"></Banner>
          </Hero>
          <Bouncing />
        </>
      );
    }
  }
}

Content.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Content);
