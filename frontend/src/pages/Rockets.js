import { useContext } from 'react';
import Hero from '../components/UI/Hero';
import Wave from '../components/UI/Wave';
import Title from '../components/UI/Title';
import RocketList from '../components/Rockets/RocketList';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/rockets.json';
import RocketsContext from '../contexts/RocketsContext';
import Welcome from '../components/Home/Welcome';
import Footer from '../components/Footer/Foot';

const Rockets = () => {
  const { rockets } = useContext(RocketsContext);

  return (
    <Screen>
      <Hero
        title="Data about SpaceX rockets"
        subtitle="Below is a list of rockets"
        image={heroAnimation}
      />
      <div className="bg-black flex justify-center">
        <svg
          className="animate-bounce w-14 h-14"
          fill="#fff"
          height="75"
          viewBox="0 0 24 24"
          width="75"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          <path d="M0-.75h24v24H0z" fill="none" />
        </svg>
      </div>
      <Wave />

      <div className="bg-darkOne">
        <Title message="Rockets" />
      </div>
      <RocketList rockets={rockets} />
      <Welcome />
      <Footer />
    </Screen>
  );
};

export default Rockets;
