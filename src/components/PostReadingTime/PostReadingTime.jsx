import React, { Component } from 'react';
import Link from 'gatsby-link';
import './PostReadingTime.css';

class PostReadingTime extends Component {
  render() {
    const { time } = this.props;

    return (
      <figure className="post reading time figure">
        <p className="caption">
          <small className="label">Reading Time</small>
          { time } min
        </p>
      </figure>
    );
  }
}

export default PostReadingTime;
