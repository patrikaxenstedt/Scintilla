import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../assets/mountain.jpg';
import PropTypes from 'prop-types';
import { memo } from 'react';
const Ship = memo(({ ship }) => {
  const { name, slug, images, price } = ship;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="text" />
        <div className="price-top">
          <h6>{price}</h6>
          <p>Info here</p>
        </div>
        <Link to={`/ships/${slug}`} className="room-link">
          Info
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Ship.propTypes = {
  ship: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default Ship;
