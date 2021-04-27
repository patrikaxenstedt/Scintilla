import Wave from '../components/UI/Wave';
import Hero from '../components/UI/Hero';
import Founder from '../components/Hometwo/Founder';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/animations/rocket-main.json';

const ContentPage = () => {
  return (
    <Screen>
      <Hero
        title={'Logged in successfully'}
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
        image={heroAnimation}
      />
      <div className="w-full bg-black text-white">
        <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
          <div className="flex flex-row w-full mt-0 justify-center text-center md:text-left md:w-2/5"></div>
        </div>
      </div>
      <Wave />
      <Founder />
    </Screen>
  );
};

export default ContentPage;
