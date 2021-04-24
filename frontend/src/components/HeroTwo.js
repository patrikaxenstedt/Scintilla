import React from 'react';

const HeroTwo = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

export default HeroTwo;

HeroTwo.defaultProps = {
  hero: 'defaultHeroTwo',
};
