import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/authActions';
import { FaAlignJustify } from 'react-icons/fa';
import logo from '../assets/404-error.png';

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/content">
              <img src={logo} alt="Logotype" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignJustify className="nav-icon" />
            </button>
          </div>
          {isAuthenticated ? (
            <ul
              className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
            >
              <li>
                <Link to="/content">Home</Link>
              </li>
              <li>
                <Link to="/content">View page</Link>
              </li>
              <li>
                <Link to="/logout" onClick={this.onLogout.bind(this)}>
                  Sign out
                </Link>
              </li>
            </ul>
          ) : (
            <ul
              className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
            >
              <li>
                <Link to="/content">Home</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
