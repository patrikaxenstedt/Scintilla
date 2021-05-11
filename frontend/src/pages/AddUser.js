import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import classnames from 'classnames';

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
      <div>
        <div>
          <div>
            <div>
              <p>Add a new user</p>
            </div>

            <div>
              <form onSubmit={this.onSubmitHandler}>
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Users name"
                    className={classnames('form-control', {
                      'is-invalid': errors.name,
                    })}
                    value={name}
                    onChange={this.onChange}
                  />
                  {errors && <div>{errors.name}</div>}
                </div>
                {/* Email */}
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Users email"
                    className={classnames('form-control', {
                      'is-invalid': errors.email,
                    })}
                    value={email}
                    onChange={this.onChange}
                  />
                  {errors && <div>{errors.email}</div>}
                </div>
                {/* password */}
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Users password"
                    className={classnames('form-control', {
                      'is-invalid': errors.password,
                    })}
                    value={password}
                    onChange={this.onChange}
                  />
                  {errors && <div>{errors.password}</div>}
                </div>
                {/* password2 */}
                <div>
                  <input
                    type="password"
                    name="password2"
                    placeholder="Confirm password"
                    className={classnames('form-control', {
                      'is-invalid': errors.password2,
                    })}
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
                >
                  Register new user
                </button>
              </form>
            </div>

            <div>
              <Link to="/admin">Go back</Link>
            </div>
          </div>
        </div>
      </div>
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
