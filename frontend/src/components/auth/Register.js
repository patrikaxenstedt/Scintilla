import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

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
      <div className="register">
        <Link to="/login">
          <h2 className="nonactive">Sign in</h2>
        </Link>
        <Link to="/register">
          <h2 className="active">Sign up</h2>
        </Link>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={classnames('text', {
              'is-invalid': errors.name,
            })}
            value={name}
            onChange={this.onChange}
          />
          {errors && <div className="invalid-feedback">{errors.name}</div>}

          <span className="login-span">Name</span>
          <div className="clear-big"></div>
          <div>
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
            {errors && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <span className="login-span">Email</span>
          <div className="clear-big"></div>
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
            {errors && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <span className="login-span">Password</span>
          <div className="clear-big"></div>
          <div>
            <input
              type="password"
              name="password2"
              placeholder="Confirm password"
              className={classnames('text', {
                'is-invalid': errors.password2,
              })}
              value={password2}
              onChange={this.onChange}
            />
            {errors && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
          </div>
          <span className="login-span">Confirm Password</span>

          <button
            disabled={
              !(
                this.state.name &&
                this.state.email &&
                this.state.password &&
                this.state.password2
              )
            }
            className="signin"
          >
            Create account
          </button>
        </form>
      </div>
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
