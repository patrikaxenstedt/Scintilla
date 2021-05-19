import Lottie from 'lottie-react';

// Hero UI component, here we style how the looks of the title or the users name will be presented. Also the Lotti-animation.
const Hero = ({ title, subtitle, image, user }) => {
  return (
    <div className="w-full h-screen bg-white dark:bg-black text-black dark:text-white mt-8">
      <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
        <div className="flex flex-col w-full mt-5 justify-center text-center md:text-left md:w-2/5">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            {title}
            {user}!
          </h1>
          <p className="leading-normal text-xl mb-8">{subtitle}</p>
        </div>
        <div className="flex w-full justify-center md:w-3/5">
          <Lottie animationData={image} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
