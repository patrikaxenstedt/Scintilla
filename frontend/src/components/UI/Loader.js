import Lottie from 'lottie-react';

import loaderAnimation from '../../assets/lottie/loader.json';

const Loader = () => {
  return (
    <div className="flex w-96 h-96 justify-center h-screen text-white">
      <Lottie animationData={loaderAnimation} />
    </div>
  );
};

export default Loader;
