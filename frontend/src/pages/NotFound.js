import React, { Component } from 'react';
import Wave from '../components/UI/Wave';
import { Link } from 'react-router-dom';
import Screen from '../components/UI/Screen';
import Hero from '../components/UI/Hero';
import Welcome from '../components/Home/Welcome';
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
          title={'There´s nothing here'}
          subtitle="Good job, astronaut! You´ve boldly gone where no man has gone before..."
          image={heroAnimation}
        />
        <div className="w-full bg-black text-white">
          <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
            <Link to="/content">
              <button class="w-32 m-1.5 bg-mainTwo hover:bg-opacity-50 text-white font-bold py-2 px-8 rounded-full">
                Back
              </button>
            </Link>
            {/*  <div className="flex flex-row w-full mt-0 justify-center text-center md:text-left md:w-2/5"></div> */}
          </div>
        </div>
        <Wave />
        <Welcome />
        <Footer />
      </Screen>
    );
  }
}
export default NotFound;
