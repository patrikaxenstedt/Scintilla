import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Wave from '../components/UI/Wave';
import Hero from '../components/UI/Hero';
import Welcome from '../components/Home/Welcome';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/rocket-main.json';

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
          <Wave />
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
          <div className="w-full bg-black text-white">
            <div className="container flex flex-wrap px-5 mx-auto md:flex-row">
              <div className="flex flex-row w-full justify-center text-center">
                <Link to="/login">
                  <button class="w-32 m-1.5 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
                    Sign in
                  </button>
                </Link>
                <Link to="/register">
                  <button class="w-32 m-1.5 bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Wave />
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
