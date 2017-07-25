import React, { Component } from 'react';
import Link from 'gatsby-link';
import './PostNavigation.css';

class PostNavigation extends Component {
  render() {
    const { previous, next } = this.props;

    return (
      <figure className="post navigation figure">
        <Link className="link previous"
              to={`/${previous}`}>
          <span className="arrow left"></span>
          <small className="label">previous</small> {previous}
        </Link>
        <Link className="link next"
              to={`/${next}`}>
          <span className="arrow right"></span>
          <small className="label">next</small> {next}
        </Link>
      </figure>
    );
  }
}

export default PostNavigation;
