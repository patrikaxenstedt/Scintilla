import { useContext } from 'react';
import Hero from '../components/UI/Hero';
import Wave from '../components/UI/Wave';
import Title from '../components/UI/Title';
import RocketList from '../components/Rockets/RocketList';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/rockets.json';
import RocketsContext from '../contexts/RocketsContext';
import Welcome from '../components/Home/Welcome';

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
      <div className="bg-primary">
        <Title message="Rockets" />
      </div>
      <RocketList rockets={rockets} />
      <Welcome />
    </Screen>
  );
};

export default Rockets;
