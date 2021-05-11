import React, { Component } from 'react';
import Screen from '../components/UI/Screen';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import classnames from 'classnames';
import LoginLottie from '../components/UI/LoginL';
import heroAnimation from '../assets/lottie/signin.json';

class AddUser extends Component {
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
        <section className="absolute w-full h-full bg-white dark:bg-black pt-40">
          <h1 className="text-5xl font-bold leading-tight text-center mt-14 text-black dark:text-white">
            Add new user
          </h1>
          <div className="absolute w-full bg-black">
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
                        className="shadow-md rounded px-8 pt-6 pb-8 mb-4  bg-white dark:bg-black bg-opacity-80"
                      >
                        {/* Name */}
                        <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Users name"
                            className={classnames(
                              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                              {
                                'is-invalid': errors.name,
                              }
                            )}
                            value={name}
                            onChange={this.onChange}
                          />
                          {errors && <div>{errors.name}</div>}
                        </div>
                        {/* Email */}
                        <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            placeholder="Users email"
                            className={classnames(
                              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                              {
                                'is-invalid': errors.email,
                              }
                            )}
                            value={email}
                            onChange={this.onChange}
                          />
                          {errors && <div>{errors.email}</div>}
                        </div>
                        {/* password */}
                        <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Users password"
                            className={classnames(
                              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                              {
                                'is-invalid': errors.password,
                              }
                            )}
                            value={password}
                            onChange={this.onChange}
                          />
                          {errors && <div>{errors.password}</div>}
                        </div>
                        {/* password2 */}
                        <div>
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
                                'is-invalid': errors.password2,
                              }
                            )}
                            value={password2}
                            onChange={this.onChange}
                          />
                          {errors && <div>{errors.password2}</div>}
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
                          Confirm
                        </button>
                        <Link to="/admindashboard">
                          <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full m-1.5 ">
                            Back
                          </button>
                          {this.state.redirect && (
                            <Redirect to={'/admindashboard'} />
                          )}
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Screen>
    );
  }
}

AddUser.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(AddUser);
