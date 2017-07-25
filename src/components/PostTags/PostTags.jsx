import React, { Component } from 'react';
import _ from 'lodash';
import Link from 'gatsby-link';
import './PostTags.css';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post tags figure">
        {tags && tags.map(tag => (
          <Link className="tag button"
                key={tag}
                to={`/tags/${_.kebabCase(tag)}`}>
            {tag}
          </Link>
        ))}
      </div>

    );
  }
}

export default PostTags;
