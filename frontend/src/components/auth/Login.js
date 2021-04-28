import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import Screen from '../UI/Screen';
import Hero from '../UI/Hero';
import heroAnimation from '../../assets/lottie/signin.json';
import Wave from '../UI/Wave';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { email, password, errors } = this.state;

    return (
      <Screen>
        <Hero
          title={'Sign in here'}
          subtitle="subtitle"
          image={heroAnimation}
        />
        <div className="bg-black">
          <div className="bg-black text-white w-full max-w-xs">
            <form
              onSubmit={this.onSubmitHandler}
              className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  className={classnames(
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline':
                        errors.email,
                    }
                  )}
                  value={email}
                  onChange={this.onChange}
                />
                {errors && <div className="error-email">{errors.email}</div>}
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className={classnames(
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline':
                        errors.password,
                    }
                  )}
                  value={password}
                  onChange={this.onChange}
                />
                {errors && (
                  <div className="error-password">{errors.password}</div>
                )}
              </div>

              <button
                disabled={!(this.state.email && this.state.password)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <Link to="/">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline">
                  Back
                </button>
              </Link>
            </form>
          </div>
        </div>
        <Wave />
      </Screen>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
