import HeroTwo from '../../components/UI/HeroTwo';
import heroAnimation from '../../assets/lottie/rocket-main.json';

const Welcome = () => {
  return (
    <div className="bg-darkOne ">
      <div className="container mx-auto mb-20 bg-darkOne h-screen">
        <h1 className="w-full text-3xl text-white opacity-50 font-bold leading-tight text-center my-14">
          SpaceX was founded under the belief that a future where humanity is
          out exploring the stars is fundamentally more exciting than one where
          we are not.
        </h1>
        <h1 className="w-full text-3xl text-white font-bold leading-tight text-center my-14 ">
          -Elon Musk
        </h1>
        <div className="flex flex-col items-center my-10 mx-20 xl:flex-row ">
          <div className="flex flex-col m-5 w-full text-center xl:w-1/2 lg:text-left">
            <h1 className="text-4xl font-bold mb-5 text-white">About</h1>
            <p className="text-base text-white opacity-50">
              SpaceX, in full Space Exploration Technologies Corporation,
              American aerospace company founded in 2002 that helped usher in
              the era of commercial spaceflight. It was the first private
              company to successfully launch and return a spacecraft from Earth
              orbit and the first to launch a crewed spacecraft and dock it with
              the International Space Station (ISS). Headquarters are in
              Hawthorne, California.
            </p>
          </div>

          <HeroTwo image={heroAnimation} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
