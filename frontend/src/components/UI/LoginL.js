import Lottie from 'lottie-react';

const LoginLottie = ({ image }) => {
  return (
    <div className="w-full bg-black">
      <div className="flex justify-center">
        <div className="flex w-full justify-center md:w-3/5">
          <Lottie animationData={image} />
        </div>
      </div>
    </div>
  );
};

export default LoginLottie;
