import React, { Component } from 'react';
import Link from 'gatsby-link';
import config from '../../../data/SiteConfig';
import './Header.css';

class Header extends Component {
  render() {
    const { location } = this.props;

    let header;

    if (location.pathname === '/') {
      header = (
        <header className="index header">
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
    } else {
      header = (
        <header className="header">
          <Link className="link"
                to="/">
            <img className="logo image" src={config.siteLogo} />
          </Link>
        </header>
      );
    }

    return header;
  }
}

export default Header;
