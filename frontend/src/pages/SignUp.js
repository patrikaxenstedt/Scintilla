import Wave from '../components/UI/Wave';
import Hero from '../components/UI/Hero';
/* import Founder from '../components/Hometwo/Founder'; */
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/animations/signin.json';
import Register from '../components/UI/Register';

const SignUpPage = () => {
  return (
    <Screen>
      <Hero title={'Sign up here'} subtitle="Subtitle" image={heroAnimation} />
      <Register />
      <Wave />
    </Screen>
  );
};

export default SignUpPage;
