import Wave from '../components/UI/Wave';
import Hero from '../components/UI/Hero';
import Welcome from '../components/Home/Welcome';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/rocket-main.json';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Screen>
      <Hero
        title={'Welcome to Scintilla'}
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
        image={heroAnimation}
      />
      <div className="w-full bg-black text-white">
        <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
          <div className="flex flex-row w-full mt-0 justify-center text-center md:text-left md:w-2/5">
            <Link to="/login">
              <button class="w-32 m-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Sign in
              </button>
            </Link>
            <Link to="/register">
              <button class="w-32 m-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Wave />
      <Welcome />
    </Screen>
  );
};

export default Home;