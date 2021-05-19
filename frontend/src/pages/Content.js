import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hero from '../components/UI/Hero';
import Welcome from '../components/Home/Welcome';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/success.json';
import Footer from '../components/Footer/Foot';

// The page beeing seen after you logged in, displays a welcome message with the users name together with more components.
// This function is on several pages, window.scrollTo(0, 0) works like so, that this page always is shown from the top with margin 0 top.
class ContentPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) {
      return (
        <Screen>
          <Hero
            user={user.name}
            title={'Welcome, '}
            subtitle="You have logged in successfully, let's explore."
            image={heroAnimation}
          />
          <Welcome />
          <Footer />
        </Screen>
      );
    }
  }
}

ContentPage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ContentPage);
