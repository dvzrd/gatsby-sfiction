import React, { Component } from 'react';
import _ from 'lodash';
import Link from 'gatsby-link';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post tags figure">
        {tags && tags.map(tag => (
          <Link className="button"
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
