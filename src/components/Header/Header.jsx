import React, { Component } from 'react';
import Link from 'gatsby-link';
import config from '../../../data/SiteConfig';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link className="link"
              to="/">
          <img className="logo image" src={config.siteLogo} />

          <h1 className="title">
            {config.siteTitle}
            <small className="sub description">
              {config.siteDescription}
            </small>
          </h1>
        </Link>
      </header>
    );
  }
}

export default Header;
