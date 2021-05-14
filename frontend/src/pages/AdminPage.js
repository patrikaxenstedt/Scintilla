import React, { Component } from 'react';
import axios from 'axios';
import Screen from '../components/UI/Screen';
import Hero from '../components/UI/Hero';
import heroAnimation from '../assets/lottie/dashboard.json';

import { Link } from 'react-router-dom';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('/api/users').then((res) => {
      //console.log(res);
      this.setState({ users: res.data.users });
    });
  }

  render() {
    let data = this.state.users;

    return (
      <Screen>
        <Hero
          title="Admin dashboard"
          subtitle="Add a user, update a user or delete a user.  "
          image={heroAnimation}
        />
        <div className="bg-white dark:bg-black flex justify-center -mt-20">
          <svg
            className="animate-bounce w-14 h-14"
            fill="#8739F9"
            height="75"
            viewBox="0 0 24 24"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
            <path d="M0-.75h24v24H0z" fill="none" />
          </svg>
        </div>
        <div>
          <div className="my-auto mx-auto grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-4 bg-white dark:bg-darkOne w-full">
            {data.length > 0
              ? data.map((user, i) => {
                  return (
                    <div
                      className={`opacity-75 bg-gradient-to-t from-green-400 to-blue-500 flex flex-col cursor-pointer shadow-lg rounded-md w-80 mx-16 mt-16 transition duration-2000  hover:opacity-100 overflow-auto mb-24`}
                      style={{
                        height: '180px',
                        width: '320px',
                      }}
                    >
                      <Link to={'users/' + user._id}>
                        <div className="p-5">
                          <div className="flex items-center justify-between text-white">
                            <div className="font-bold text-3xl" width="200">
                              {user.name}
                            </div>
                            <div className="font-bold text-lg" width="180">
                              {user.role}
                            </div>
                          </div>

                          <div className="flex flex-1">
                            <span className="text-white text-opacity-50">
                              {user.email}
                            </span>
                          </div>

                          <div className="flex flex-1 mt-3">
                            <div
                              className="text-white text-opacity-75"
                              width="250"
                            >
                              {user.date}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>{' '}
          <div className="flex justify-center bg-white dark:bg-darkOne pb-8">
            <Link to="/add">
              <button className="bg-purple-700 hover:bg-purple-400 text-white dark:text-white font-bold py-2 px-6 rounded-full m-1.5 ">
                Add a user
              </button>
            </Link>
          </div>
        </div>
      </Screen>
    );
  }
}
export default Users;
