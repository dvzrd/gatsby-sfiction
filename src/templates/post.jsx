import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Disqus from '../components/Disqus/Disqus';
import PostTags from '../components/PostTags/PostTags';
import PostNavigation from '../components/PostNavigation/PostNavigation';
import PostReadingTime from '../components/PostReadingTime/PostReadingTime';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './post.css';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = this.props.location.pathname;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className="post template">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="post page">
          <figure className="article figure">
            <h1 className="title">
              {post.title}
              <small className="sub">
                {post.date}
              </small>
              <Link className="category link"
                    to={`/categories/${_.kebabCase(post.category)}`}>
                {post.category}
              </Link>
            </h1>
            <article className="article" dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </figure>
          <PostTags tags={post.tags} />
          <PostNavigation previous={post.previous} next={post.next} />
          <Disqus post={post} />
          <SocialLinks postPath={slug} postNode={postNode} />
          <PostReadingTime time={postNode.timeToRead} />
        </div>
      </div>

    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    timeToRead
    excerpt
    frontmatter {
      title
      date
      category
      tags
      previous
      next
    }
  }
}
`;
