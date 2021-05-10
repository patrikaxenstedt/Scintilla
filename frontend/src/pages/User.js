import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      redirect: false,
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/users/show/${this.props.match.params.id}`).then((res) => {
      console.log(res);
      this.setState({ user: res.data.user });
    });
  }

  deleteUser(event) {
    event.preventDefault();
    console.log(this.state.user._id);
    axios.post(`/api/users/delete/${this.state.user._id}`).then((res) => {
      console.log(res);
      this.setState({ redirect: this.state.redirect === false });
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <b>Details about:</b> {this.state.user.name}
          </div>
          <div>
            <div>
              <div>
                {/* <img src={userImg} alt="user" /> */}
                <br />
              </div>
              <div>
                <p>
                  <b>Name</b> : {this.state.user.name}
                </p>
                <p>
                  <b>Email</b> : {this.state.user.email}
                </p>
                <p>
                  <b>Role</b> : {this.state.user.role}
                </p>
                <p>
                  <b>ID</b> : {this.state.user._id}
                </p>
              </div>
            </div>
            <hr />
            <div>
              <Link to={this.state.user._id + '/edit'}>
                <button>Edit user</button>
              </Link>
              <form onSubmit={this.deleteUser}>
                <button type="submit">Delete</button>
                <Link to={'/admindashboard'}>
                  <button>Back</button>
                </Link>
              </form>
            </div>

            {this.state.redirect && <Redirect to={'/users'} />}
          </div>
        </div>
      </div>
    );
  }
}
export default User;
