import React, { Component } from 'react';
import './UserLinks.css';

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <button className="button"
              key={link.label}
              href={link.url}>
        {labeled ? link.label : ''}
      </button>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <figure className="user links">
        { this.getLinkElements() }
      </figure>
    );
  }
}

export default UserLinks;
