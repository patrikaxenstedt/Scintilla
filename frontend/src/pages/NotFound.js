import React, { Component } from 'react';
import Wave from '../components/UI/Wave';
import Lottie from 'lottie-react';
import Screen from '../components/UI/Screen';

import heroAnimation from '../assets/lottie/404.json';

class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Screen>
        <div className="flex w-full justify-center bg-black">
          <Lottie animationData={heroAnimation} />
        </div>
        <Wave />
      </Screen>
    );
  }
}
export default NotFound;
