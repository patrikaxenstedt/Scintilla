import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
//import logo from '';
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/content">
              {/* <img src={logo} alt="Logotype" /> */}
              Logo here
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignJustify className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/content">Home</Link>
            </li>
            <li>
              <Link to="/content">View page</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}