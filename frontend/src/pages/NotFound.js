import React, { Component } from 'react';
import Wave from '../components/UI/Wave';
import { Link } from 'react-router-dom';
import Screen from '../components/UI/Screen';
import Hero from '../components/UI/Hero';
import Footer from '../components/Footer/Foot';
import heroAnimation from '../assets/lottie/404.json';

class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Screen>
        <Hero
          title={'Page not found'}
          subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          image={heroAnimation}
        />
        <div className="w-full bg-black text-white">
          <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
            <Link to="/content">
              <button className="w-32 m-1.5 bg-mainTwo hover:bg-opacity-50 text-white font-bold py-2 px-8 rounded-full">
                Back
              </button>
            </Link>
            <div className="flex flex-row w-full mt-0 justify-center text-center md:text-left md:w-2/5"></div>
          </div>
        </div>
        <Wave />

        <Footer />
      </Screen>
    );
  }
}
export default NotFound;
