import { useContext } from 'react';
import Hero from '../components/UI/Hero';
import Wave from '../components/UI/Wave';
import Title from '../components/UI/Title';
import RocketList from '../components/Rockets/RocketList';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/rockets.json';
import RocketsContext from '../contexts/RocketsContext';

const Rockets = () => {
  const { rockets } = useContext(RocketsContext);

  return (
    <Screen>
      <Hero
        title="Data about SpaceX rockets"
        subtitle="Below is a list of rockets"
        image={heroAnimation}
      />
      <Wave />
      <Title message="Rockets" />
      <RocketList rockets={rockets} />
    </Screen>
  );
};

export default Rockets;
