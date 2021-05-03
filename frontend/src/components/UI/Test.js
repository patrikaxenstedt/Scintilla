import Lottie from 'lottie-react';

const Test = ({ image }) => {
  return (
    <div className="w-2/3 bg-black m-auto">
      <div className="flex content-center items-center justify-center">
        <div className="flex flex-col w-full mt-10 justify-center md:w-2/5">
          <Lottie animationData={image} />
        </div>
      </div>
    </div>
  );
};

export default Test;
