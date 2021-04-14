import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Startpage</h1>
          <p>Lorem Ipsum text</p>
          <div>
            <Link to="/register">Register</Link>
          </div>

          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
