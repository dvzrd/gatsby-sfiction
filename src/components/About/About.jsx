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
          Damir Vazgird is an NYC based <a className="link" href="http://damirvazgird.com" target="_blank">developer</a>, <a className="link" href="http://damir.graphics" target="_blank">designer</a>, and <a className="link" href="http://damir.gallery" target="_blank">artist</a> currently working on a <a className="link" href="http://novabook.co" target="_blank">digital graphic novel</a>.
        </p>
      </figure>
    );
  }
}

export default About;
