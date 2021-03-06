import Lottie from 'lottie-react';

// LoginLottie is used for the page Sign in and Sign up, displays at bottom right screen, center on mobile.
const LoginLottie = ({ image }) => {
  return (
    <div className="w-full bg-white dark:bg-black mt-18">
      <div className="flex justify-end">
        <div className="flex w-full justify-center md:w-2/5">
          <Lottie animationData={image} />
        </div>
      </div>
    </div>
  );
};

export default LoginLottie;
