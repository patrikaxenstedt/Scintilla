import Wave from '../components/UI/Wave';
import Hero from '../components/UI/Hero';
import Founder from '../components/Hometwo/Founder';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/animations/rocket-main.json';

const Home = () => {
  return (
    <Screen>
      <Hero
        title={'Welcome to Scintilla'}
        subtitle="subtitle"
        image={heroAnimation}
      />
      <Wave />
      <Founder />
    </Screen>
  );
};

export default Home;
