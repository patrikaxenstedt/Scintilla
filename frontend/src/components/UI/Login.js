import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';

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
      <div className="container flex flex-wrap flex-col mx-auto md:flex-row ">
        <div className="flex flex-row w-full mt-0 content-start text-center md:text-left md:w-2/5">
          <div className="bg-black -mt-80">
            <div className="bg-black text-white w-full max-w-xs">
              <form
                onSubmit={this.onSubmitHandler}
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
                  {errors && <div className="error-email">{errors.email}</div>}
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
        </div>
      </div>
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
