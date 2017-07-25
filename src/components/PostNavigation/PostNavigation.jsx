import React, { Component } from 'react';
import Link from 'gatsby-link';
import './PostNavigation.css';

class PostNavigation extends Component {
  render() {
    const { previous, next } = this.props;

    return (
      <figure className="post navigation figure">
        previous: { previous } |
        next: { next }
      </figure>
    );
  }
}

export default PostNavigation;
