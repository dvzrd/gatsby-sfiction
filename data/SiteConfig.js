module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  siteTitle: 'Damir.io', // Site title.
  siteTitleAlt: 'SFiction', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'http://damir.io', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A collection of speculative fiction stories', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '465038723874910', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-31367619-3', // GA tracking ID.
  disqusShortname: 'damir-software', // Disqus shortname.
  postDefaultCategoryID: 'speculative fiction', // Default category for posts.
  userName: 'Damir Vazgird', // Username to display in the author segment.
  userTwitter: 'dvazgird', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'New York, New York', // User location to display in the author segment.
  userAvatar: '/images/about.gif', // User avatar to display in the author segment.
  userDescription: 'Damir Vazgird is an NYC based developer, designer and artist currently working on a digital graphic novel.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'Twitter',
      url: 'https://twitter.com/dvazgird',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/dvzrd/',
      iconClassName: 'fa fa-instagram',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/dvzrd',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Email',
      url: 'mailto:dvazgird@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2016, Damir Vazgird. All rights reserved.', // Copyright string for the footer of the website and RSS feed.
};
