import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import LoginLottie from '../UI/LoginL';
import heroAnimation from '../../assets/lottie/signin.json';

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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { email, password, errors } = this.state;

    return (
      <>
        <main>
          <section className="absolute w-full h-full bg-black pt-40">
            <h1 className="text-5xl font-bold leading-tight text-center mt-14 text-white">
              Sign in here
            </h1>
            <div className="absolute w-full bg-black top-0">
              <LoginLottie image={heroAnimation} />
            </div>
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <form
                          onSubmit={this.onSubmitHandler}
                          className="shadow-md rounded px-8 pt-6 pb-8 mb-4  bg-black bg-opacity-50"
                        >
                          <div className="mb-4">
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
                              <div className="error-email">{errors.email}</div>
                            )}
                          </div>
                          <div className="mb-6">
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
                              <div className="error-password">
                                {errors.password}
                              </div>
                            )}
                          </div>

                          <button
                            disabled={
                              !(this.state.email && this.state.password)
                            }
                            className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full m-1.5 "
                          >
                            Sign In
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
              </div>
            </div>
          </section>
        </main>
      </>
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
