import React, { Component } from 'react';
import { FaSpaceShuttle } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSpaceShuttle />,
        title: 'Spaceship xx99x1',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <FaSpaceShuttle />,
        title: 'Spaceship xx99x2',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <FaSpaceShuttle />,
        title: 'Spaceship xx99x3',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <FaSpaceShuttle />,
        title: 'Spaceship xx99x4',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Hello from services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
