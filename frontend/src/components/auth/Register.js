import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import Screen from '../UI/Screen';
import Hero from '../UI/Hero';
import heroAnimation from '../../assets/lottie/signin.json';
import Wave from '../UI/Wave';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { name, email, password, password2, errors } = this.state;

    return (
      <Screen>
        <Hero
          title={'Sign up here'}
          subtitle="register"
          image={heroAnimation}
        />
        <div className="bg-black -mt-80">
          <div className="bg-black text-white w-full max-w-xs">
            <form
              onSubmit={this.onSubmitHandler}
              className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className={classnames(
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline':
                        errors.name,
                    }
                  )}
                  value={name}
                  onChange={this.onChange}
                />
                {errors && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
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
                {errors && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
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
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm password
                </label>

                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm password"
                  className={classnames(
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline':
                        errors.password2,
                    }
                  )}
                  value={password2}
                  onChange={this.onChange}
                />
                {errors && (
                  <div className="invalid-feedback">{errors.password2}</div>
                )}
              </div>

              <button
                disabled={
                  !(
                    this.state.name &&
                    this.state.email &&
                    this.state.password &&
                    this.state.password2
                  )
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create account
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(Register);
