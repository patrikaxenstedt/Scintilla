import React, { Component } from 'react';
import {
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaMailBulk,
  FaMap,
} from 'react-icons/fa';
import Title from './Title';

export default class Footer extends Component {
  state = {
    infos: [
      {
        icon: <FaMailBulk />,
        title: 'Email',
        info: <a href="mailto:patrik.axenstedt@gmail.com">Email Us</a>,
      },
      {
        icon: <FaPhone />,
        title: 'Phone',
        info: <a href="tel:+46-073-26-29174">+46-073-26-29-174</a>,
      },
      {
        icon: <FaMap />,
        title: 'Find us',
        info: (
          <a
            href="https://goo.gl/maps/uNUkGWUFaGcjqteVA"
            target="_blank"
            rel="noreferrer"
          >
            We are here
          </a>
        ),
      },
      {
        icon: <FaInstagram />,
        title: 'Instagram',
        info: (
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Our Instagram
          </a>
        ),
      },

      {
        icon: <FaFacebook />,
        title: 'Facebook',
        info: (
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Our Facebook
          </a>
        ),
      },
    ],
  };
  render() {
    return (
      <section className="infos">
        <Title title="Hello from footer" />
        <div className="infos-center">
          {this.state.infos.map((item) => {
            return (
              <article key={`item-${item.title}`} className="info">
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
