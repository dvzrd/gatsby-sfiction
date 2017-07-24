import React, { Component } from 'react';
import Link from 'gatsby-link';
import About from '../About/About';
import config from '../../../data/SiteConfig';
import './Footer.css';

class Footer extends Component {
  render() {
    const url = config.siteRss;

    return (
      <footer className="footer">
        <About />
        <p className="copyright">
          {config.copyright}
        </p>
      </footer>
    );
  }
}

export default Footer;
