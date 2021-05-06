import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hero from '../components/UI/Hero';
import Welcome from '../components/Home/Welcome';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/rockets.json';

import Footer from '../components/Footer/Foot';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return (
        <Screen>
          <Hero
            title={'Welcome to Scintilla'}
            subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
            image={heroAnimation}
          />

          <div className="bg-black flex justify-center -mt-20">
            <svg
              className="animate-bounce w-14 h-14"
              fill="#fff"
              height="75"
              viewBox="0 0 24 24"
              width="75"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
              <path d="M0-.75h24v24H0z" fill="none" />
            </svg>
          </div>
          <Welcome />
          <Footer />
        </Screen>
      );
    } else
      return (
        <Screen>
          <Hero
            title={'Welcome to Scintilla'}
            subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
            image={heroAnimation}
          />
          <div className="bg-white dark:bg-black flex justify-center -mt-20">
            <svg
              className="animate-bounce w-14 h-14"
              fill="#8739F9"
              height="75"
              viewBox="0 0 24 24"
              width="75"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
              <path d="M0-.75h24v24H0z" fill="none" />
            </svg>
          </div>
          <Welcome />
          <Footer />
        </Screen>
      );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
