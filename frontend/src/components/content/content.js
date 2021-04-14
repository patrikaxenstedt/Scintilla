import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

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
          <div>
            <p>
              Welcome! <b>{user.name}</b>
            </p>

            <a onClick={this.onLogout.bind(this)} href="/logout">
              Logout
            </a>
          </div>
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
