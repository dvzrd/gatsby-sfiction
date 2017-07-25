import React from 'react';
import Link from 'gatsby-link';
import './PostListing.css';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });

    });
    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <figure className="post listing figure">
        <ul className="list">
          {postList.map(post => (
            <li className="item"
                key={post.path}>
              <Link className="link"
                    to={post.path}>
                <h2 className="title">
                  {post.title}
                  <small className="sub meta">
                    {post.date}
                  </small>
                </h2>
                <p className="excerpt">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </figure>
    );
  }
}

export default PostListing;
