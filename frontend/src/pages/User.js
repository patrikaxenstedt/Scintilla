import React, { Component } from 'react';
import axios from 'axios';
import Screen from '../components/UI/Screen';
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
      <Screen>
        <div className="my-auto mx-auto grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-4 bg-white dark:bg-darkOne w-full">
          <div
            className={`bg-gradient-to-t from-green-400 to-blue-500 flex flex-col shadow-lg rounded-md w-80 mx-16 mt-16 transition duration-2000 overflow-auto mb-24`}
            style={{
              height: '240px',
              width: '320px',
            }}
          >
            {/* <Link to={'users/' + user._id}> */}
            <div className="p-5">
              <div className="flex items-center justify-between text-white">
                <div className="font-bold text-3xl" width="200">
                  {this.state.user.name}
                </div>
                <div className="font-bold text-lg" width="180">
                  {this.state.user.role}
                </div>
              </div>

              <div className="flex flex-1">
                <span className="text-white text-opacity-50">
                  {this.state.user.email}
                </span>
              </div>

              <div className="flex flex-1 mt-3">
                <div className="text-white text-opacity-75" width="250">
                  {this.state.user.date}
                </div>
              </div>
              <Link to={this.state.user._id + '/edit'}>
                <button className="bg-mainTwo hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full m-1.5 ">
                  Edit user
                </button>
              </Link>
              <form onSubmit={this.deleteUser}>
                <button
                  type="submit"
                  className="bg-red-400 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full m-1.5 "
                >
                  Delete
                </button>
                <Link to={'/admindashboard'}>
                  <button className="bg-mainOne hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full m-1.5 ">
                    Back
                  </button>
                </Link>
              </form>
            </div>
            {this.state.redirect && <Redirect to={'/users'} />}
          </div>
          );
        </div>
      </Screen>
    );
  }
}
export default User;
