import React, { Component } from 'react';
import { FaCar, FaShower, FaCoffee, FaWifi } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaWifi />,
        title: 'Free Wifi',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <FaCar />,
        title: 'Free parking',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <FaShower />,
        title: 'Showers',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <FaCoffee />,
        title: 'Café',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Some extras bla bla" />
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
