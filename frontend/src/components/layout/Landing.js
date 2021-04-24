import React from 'react';
import Banner from '../../components/Banner';
import Hero from '../../components/Hero';
import HeroTwo from '../../components/HeroTwo';
import Services from '../../components/Services';
import Bouncing from '../../components/Bouncing';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Lorem ipsum"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        >
          <Link to="/login" className="login-a">
            <button className="signin">Sign in</button>
          </Link>
          <Link to="/register" className="login-a">
            <button className="signin"> Sign up</button>
          </Link>
        </Banner>
      </Hero>
      <Bouncing />
      <Services />
      <HeroTwo>
        <Banner
          title="Lorem ipsum"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Banner>
      </HeroTwo>
    </>
  );
};

export default Landing;
