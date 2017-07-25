import React, { Component } from 'react';
import './PostNavigation.css';

class PostNavigation extends Component {
  render() {
    const { previous, next } = this.props;
    console.log(this.props);

    return (
      <figure className="post navigation figure">
        previous: { previous } |
        next: { next }
      </figure>
    );
  }
}

export default PostNavigation;
