import Lottie from 'lottie-react';

// HeroTwo is used for the lower part, when scrolling down.
const HeroTwo = ({ image }) => {
  return (
    <div className="w-full  bg-transparent text-white mt-8">
      <div className="flex w-full justify-center md:w-full">
        <Lottie animationData={image} />
      </div>
    </div>
  );
};

export default HeroTwo;
