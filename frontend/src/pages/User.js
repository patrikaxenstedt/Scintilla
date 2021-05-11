import React, { Component } from 'react';
import axios from 'axios';
import Screen from '../components/UI/Screen';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import LoginLottie from '../components/UI/LoginL';
import heroAnimation from '../assets/lottie/test.json';

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
        <section className="absolute w-full h-full bg-white dark:bg-black pt-40">
          <h1 className="text-5xl font-bold leading-tight text-center mt-14 text-black dark:text-white">
            About this user
          </h1>
          <div className="absolute w-full bg-black">
            <LoginLottie image={heroAnimation} />
          </div>
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80">
                        <div className="p-5">
                          <div className="flex items-center justify-between text-black dark:text-white">
                            <div className="font-bold text-3xl">
                              Name: {this.state.user.name}
                            </div>
                            <div className="font-bold text-lg">
                              Role: {this.state.user.role}
                            </div>
                          </div>
                          <div className="flex flex-1">
                            <span className="text-black dark:text-white text-opacity-50">
                              Email: {this.state.user.email}
                            </span>
                          </div>
                          <div className="flex flex-1 mt-3">
                            <div className="text-black dark:text-white text-opacity-75 mb-8">
                              Created at: {this.state.user.date}
                            </div>
                          </div>

                          <form onSubmit={this.deleteUser}>
                            <button
                              type="submit"
                              className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full m-1.5 "
                            >
                              Delete
                            </button>
                            <Link to={this.state.user._id + '/edit'}>
                              <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full m-1.5 ">
                                Edit user
                              </button>
                            </Link>
                            <Link to={'/admindashboard'}>
                              <button className="bg-mainOne hover:bg-black text-white font-bold py-2 px-8 rounded-full m-1.5 ">
                                Back
                              </button>
                            </Link>
                          </form>
                        </div>
                        {this.state.redirect && (
                          <Redirect to={'/admindashboard'} />
                        )}
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
export default User;
