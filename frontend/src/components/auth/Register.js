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
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { name, email, password, password2, errors } = this.state;

    return (
      <Screen>
        <Hero
          title={'Sign up here'}
          subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
          image={heroAnimation}
        />
        <div className="w-full bg-black text-white">
          <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
            <div className="flex flex-col w-full mt-5 justify-center text-center md:text-left md:w-2/5">
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
                    className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full m-1.5 "
                  >
                    Create account
                  </button>
                  <Link to="/">
                    <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full m-1.5 ">
                      Back
                    </button>
                  </Link>
                </form>
              </div>
            </div>
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
