import React, { Component } from 'react';

class Foot extends Component {
  render() {
    return (
      <footer className="footer bg-white dark:bg-black relative pt-8 pb-8">
        <h1 className="text-black dark:text-white text-center text-sm">
          Created using{' '}
          <a
            className="underline opacity-50"
            href="https://docs.spacexdata.com/"
            target="_blank"
            rel="noreferrer"
          >
            SpaceX REST API
          </a>
        </h1>
      </footer>
    );
  }
}
export default Foot;
