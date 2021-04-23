import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import ShipsHolder from '../components/ShipsHolder';
const Ships = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Ships">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <ShipsHolder />
    </>
  );
};

export default Ships;
