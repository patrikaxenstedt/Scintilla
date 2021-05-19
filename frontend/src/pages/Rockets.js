import { useContext } from 'react';
import Hero from '../components/UI/Hero';
import Title from '../components/UI/Title';
import RocketList from '../components/Rockets/RocketList';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/statics.json';
import RocketsContext from '../contexts/RocketsContext';
import Footer from '../components/Footer/Foot';

// Rocketspage with Hero and other components, uses RocketList to get all rockets avaible.
const Rockets = () => {
  const { rockets } = useContext(RocketsContext);

  return (
    <Screen>
      <Hero
        title="Explore SpaceX rockets here"
        subtitle="Down below you'll see a selection of rockets. Go on astronaut, gather information."
        image={heroAnimation}
      />
      <div className="bg-white dark:bg-black flex justify-center -mt-20">
        <svg
          className="animate-bounce w-14 h-14"
          fill="#8739F9"
          height="75"
          viewBox="0 0 24 24"
          width="75"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          <path d="M0-.75h24v24H0z" fill="none" />
        </svg>
      </div>

      <div className="bg-white dark:bg-darkOne">
        <Title message="Rockets" />
      </div>
      <RocketList rockets={rockets} />
      <Footer />
    </Screen>
  );
};

export default Rockets;
