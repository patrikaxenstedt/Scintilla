import Lottie from 'lottie-react';
import loaderAnimation from '../../assets/lottie/loader.json';

// Loader, used when isLoading, for example when fetching all rockets information ect.
const Loader = () => {
  return (
    <div className="flex w-96 h-96 justify-center h-screen text-white">
      <Lottie animationData={loaderAnimation} />
    </div>
  );
};

export default Loader;
