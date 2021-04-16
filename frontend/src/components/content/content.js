import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Banner from '../Banner';
import Hero from '../Hero';

class Content extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div>
        {isAuthenticated ? (
          <Hero>
            <Banner title="Prototyp" subtitle="Lorem ipsum">
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
      </div>
    );
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
