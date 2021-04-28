import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wave from '../components/UI/Wave';
import Hero from '../components/UI/Hero';
import Welcome from '../components/Home/Welcome';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/success.json';

class ContentPage extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) {
      return (
        <Screen>
          <Hero
            title={'Logged in successfully'}
            subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
            image={heroAnimation}
          />
          <div className="w-full bg-black text-white">
            <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
              {user.name}
              <div className="flex flex-row w-full mt-0 justify-center text-center md:text-left md:w-2/5"></div>
            </div>
          </div>
          <Wave />
          <Welcome />
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
