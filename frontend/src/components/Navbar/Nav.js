import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';
import NavItem from './NavItem';
import Image from '../UI/Image';
import './Nav.css';

class Nav extends Component {
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
    const { isAuthenticated, user } = this.props.auth;

    return (
      // <nav className="navbar">
      //   <div className="nav-center">
      //     <div className="nav-header">
      //       <Link to="/content">
      //         {/* <img src={logo} alt="Logotype" /> */}
      //         Logo
      //       </Link>
      //       <button
      //         type="button"
      //         className="nav-btn"
      //         onClick={this.handleToggle}
      //       ></button>
      //     </div>
      //     {isAuthenticated ? (
      //       <ul
      //         className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
      //       >
      //         <li>
      //           <Link to="/content">Welcome {user.name}!</Link>
      //         </li>
      //         <li>
      //           <Link to="/content">Home</Link>
      //         </li>
      //         <li>
      //           <Link to="/content">???</Link>
      //         </li>
      //         <li>
      //           <Link to="/logout" onClick={this.onLogout.bind(this)}>
      //             Sign out
      //           </Link>
      //         </li>
      //       </ul>
      //     ) : (
      //       <ul
      //         className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
      //       >
      //         <li>
      //           <Link to="/content">Home</Link>
      //         </li>
      //       </ul>
      //     )}
      //   </div>
      // </nav>
      <nav className="nav flex flex-wrap items-center justify-between px-4 bg-black text-white">
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

          <span className="font-semibold text-xl tracking-tight">
            Scintilla
          </span>
        </Link>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="icon bg-grey-darkest flex items-center relative"></span>
        </label>
        {isAuthenticated ? (
          <ul className="flex menu border-gray-500 border-b justify-end m-0 w-full md:border-none md:w-auto">
            <NavItem path="content">Welcome {user.name}</NavItem>
            <NavItem path="/" exact>
              Startpage
            </NavItem>
            <NavItem path="/rockets">Rockets</NavItem>
            <NavItem path="/launches">Launches</NavItem>
            <NavItem path="/logout" onClick={this.onLogout.bind(this)}>
              Sign out
            </NavItem>
          </ul>
        ) : (
          <div></div>
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
