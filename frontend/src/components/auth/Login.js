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
      <div className="login">
        <Link to="/login">
          <h2 class="active">Sign in</h2>
        </Link>
        <Link to="/register">
          <h2 class="nonactive">Sign up</h2>
        </Link>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="email"
            placeholder="Your email"
            className={classnames('text', {
              'is-invalid': errors.email,
            })}
            value={email}
            onChange={this.onChange}
          />
          {errors && <div className="error-email">{errors.email}</div>}

          <span className="login-span">Email</span>

          <br />

          <br />

          <div>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className={classnames('text', {
                'is-invalid': errors.password,
              })}
              value={password}
              onChange={this.onChange}
            />
            {errors && <div className="error-password"></div>}
          </div>
          <span className="login-span">Password</span>
          <br />

          <button
            disabled={!(this.state.email && this.state.password)}
            className="signin"
          >
            Sign In
          </button>
        </form>
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
