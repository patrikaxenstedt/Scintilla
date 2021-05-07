import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hero from '../components/UI/Hero';
import Welcome from '../components/Home/Welcome';
import Screen from '../components/UI/Screen';
import heroAnimation from '../assets/lottie/success.json';
import Footer from '../components/Footer/Foot';

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
            title={'Welcome,'}
            subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
            image={heroAnimation}
          />
          <div className="w-full bg-white dark:bg-black text-black dark:text-white">
            <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
              Keep this text and placement or delete?
              <div className="flex flex-row w-full mt-0 justify-center text-center md:text-left md:w-2/5"></div>
            </div>
          </div>
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
