import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';
import Image from '../UI/Image';
import Toggle from '../Themes/themeToggle';
import './Nav.css';

class Nav extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  // If the user is authenticated return a navbar with links to other pages etc. Else, return links to Sign in | Sign up.
  // Logout functionallity is also imported to navbar since logout button is shown here.
  // Toggle function for darkmode/lightmode is imported to the navbar so the user always can switch between those two.
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <nav className="nav flex flex-wrap items-center justify-between px-4 bg-white text-black dark:bg-black dark:text-white mt-0 fixed w-full z-10 top-0">
        <Link
          className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest"
          to="/"
        >
          <Image
            className="h-10 mr-2 w-10"
            src="favicon.webp"
            width="40px"
            height="40px"
          />

          <span className="font-semibold text-xl">Scintilla</span>
        </Link>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="icon bg-black dark:bg-white flex items-center relative"></span>
        </label>
        {isAuthenticated ? (
          <ul className="flex menu border-gray-500 border-b justify-end m-0 w-full md:border-none md:w-auto">
            <Toggle />
            <li className="border-t border-gray-500 md:border-none">
              <NavLink
                to="/content"
                className="block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darker md:inline-block ham-hover"
                activeClassName="font-bold md:border md:border-black md:rounded-full md:bg-black md:text-white dark:bg-white dark:text-black dark:border-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/rockets"
                className="block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darker md:inline-block ham-hover"
                activeClassName="font-bold md:border md:border-black md:rounded-full md:bg-black md:text-white dark:bg-white dark:text-black dark:border-white"
              >
                Rockets
              </NavLink>
              <NavLink
                to="/logout"
                className="block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darker md:inline-block ham-hover"
                activeClassName="font-bold md:border md:border-black md:rounded-full md:bg-black md:text-white dark:bg-white dark:text-black dark:border-white"
                onClick={this.onLogout.bind(this)}
              >
                Sign out
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="flex menu border-gray-500 border-b justify-end m-0 w-full md:border-none md:w-auto">
            <Toggle />
            <li className="border-t border-gray-500 md:border-none">
              <NavLink
                to="/login"
                className="block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darker md:inline-block ham-hover"
                activeClassName="font-bold md:border md:border-black md:rounded-full md:bg-black md:text-white dark:bg-white dark:text-black dark:border-white"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/register"
                className="block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darker md:inline-block ham-hover"
                activeClassName="font-bold md:border md:border-black md:rounded-full md:bg-black md:text-white dark:bg-white dark:text-black dark:border-white"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Nav);
