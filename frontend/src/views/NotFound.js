import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Wups! Could not find the page..">
        <Link to="/" className="nav-icon">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default NotFound;