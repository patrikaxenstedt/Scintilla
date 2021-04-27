import Wave from '../components/UI/Wave';
import Hero from '../components/UI/Hero';
/* import Founder from '../components/Hometwo/Founder'; */
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/animations/signin.json';
import Login from '../components/UI/Login';

const SignInPage = () => {
  return (
    <Screen>
      <Hero
        title={'Sign in here'}
        subtitle="Subtitle here"
        image={heroAnimation}
      />
      <Login />
      <Wave />
    </Screen>
  );
};

export default SignInPage;
