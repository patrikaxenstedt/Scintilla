import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Hero>
      <Banner
        title="Page not found"
        subtitle="We looked everywhere for this page. Are you sure the websites URL is correct?"
      >
        <Link to="/content" className="login-a">
          <button className="signin"> Return home</button>
        </Link>
      </Banner>
    </Hero>
  );
};

export default NotFound;
