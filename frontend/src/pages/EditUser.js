import React, { Component } from 'react';
import Screen from '../components/UI/Screen';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import LoginLottie from '../components/UI/LoginL';
import heroAnimation from '../assets/lottie/signin.json';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      role: '',
      redirect: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`).then((res) => {
      this.setState({
        name: res.data.name,
        email: res.data.email,
        role: res.data.role,
      });
      console.log(res);
    });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleRoleChange(e) {
    this.setState({ role: e.target.value });
  }

  updateUser(event) {
    event.preventDefault();
    const userUpdate = {
      name: this.state.name,
      email: this.state.email,
      role: this.state.role,
    };
    console.log(userUpdate);
    axios
      .post(`/api/users/update/${this.props.match.params.id}`, userUpdate)
      .then((res) => {
        console.log(res);
        this.setState({ redirect: this.state.redirect === false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Screen>
        <section className="absolute w-full h-full bg-white dark:bg-black pt-40">
          <h1 className="text-5xl font-bold leading-tight text-center mt-14 text-black dark:text-white">
            Update
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
                        onSubmit={this.updateUser}
                        method="user"
                        className="shadow-md rounded px-8 pt-6 pb-8 mb-4  bg-white dark:bg-black bg-opacity-80"
                      >
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            onChange={this.handleNameChange}
                            name="name"
                            value={this.state.name}
                            placeholder="New name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                          </label>
                          <input
                            type="text"
                            onChange={this.handleEmailChange}
                            name="email"
                            value={this.state.email}
                            placeholder="New email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Role
                          </label>
                          <input
                            type="text"
                            onChange={this.handleRoleChange}
                            name="role"
                            value={this.state.role}
                            placeholder="admin | member"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>

                        <button
                          type="submit"
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
        {/*   <div className="my-auto mx-auto grid grid-cols-1 justify-items-center text-black dark:text-white w-full mt-20">
          <form
            onSubmit={this.updateUser}
            method="user"
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4  bg-white dark:bg-black bg-opacity-80"
          >
            <div>
              <label>Name</label>
              <div>
                <input
                  type="text"
                  onChange={this.handleNameChange}
                  name="name"
                  value={this.state.name}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <input
                  type="text"
                  onChange={this.handleEmailChange}
                  name="email"
                  value={this.state.email}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div>
              <label>Role</label>
              <div>
                <input
                  type="text"
                  onChange={this.handleRoleChange}
                  name="role"
                  value={this.state.role}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full m-1.5 "
              >
                Update user
              </button>
            </div>
          </form>

          <Link to="/admindashboard">Cancel</Link>
          {this.state.redirect && <Redirect to={'/admindashboard'} />}
        </div> */}
      </Screen>
    );
  }
}
export default EditUser;
