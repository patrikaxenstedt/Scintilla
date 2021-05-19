import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../components/UI/Screen';
import Hero from '../components/UI/Hero';
import Footer from '../components/Footer/Foot';
import heroAnimation from '../assets/lottie/404.json';

// This is the page that shows up when you travel to a endpoint that does not exist. For example if you go to /thispageisnothere
// then this page will shown with a message and a lottie-animation.
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
              <button className="w-32 m-1.5 bg-mainTwo hover:bg-opacity-50 text-white font-bold py-2 px-8 rounded-full">
                Back
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </Screen>
    );
  }
}
export default NotFound;
