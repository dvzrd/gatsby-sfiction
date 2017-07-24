import React, { Component } from 'react';
import image from '!file-loader!../../../static/images/about.gif';
import './About.css';

// @TODO: pull bio and links from config

class About extends Component {
  render() {
    return (
      <figure className="about figure">
        <img className="image" src={image} />
        <p className="description">
          <a className="link" href="http://damirvazgird.com" target="_blank">Damir Vazgird</a> is an NYC based developer, designer, and artist currently working on a <a className="link" href="http://novabook.co" target="_blank">graphic-novel</a>. You can follow him on <a className="link" href="https://twitter.com/dvazgird" target="_blank">Twitter</a>, <a className="link" href="https://www.instagram.com/dvzrd/" target="_blank">Instagram</a>, and <a className="link" href="https://github.com/dvzrd" target="_blank">Github</a>.
        </p>
      </figure>
    );
  }
}

export default About;
