import React from 'react';
import Banner from '../../components/Banner';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Bouncing from '../../components/Bouncing';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Hero>
        <Banner title="HELLO!👋" subtitle="subtitle magic here">
          <Link to="/login" className="login-a">
            Login
          </Link>
          <Link to="/register" className="login-a">
            Register
          </Link>
        </Banner>
      </Hero>
      <Bouncing />
      <Services />
    </>
    /*     <div>
      <h1>Startpage</h1>
      <p>Lorem Ipsum text</p>
      <div>
        <Link to="/register">Register</Link>
      </div>

      <div>
        <Link to="/login">Login</Link>
      </div>
    </div> */
  );
};

export default Landing;
