import React, { Component } from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import favicon from '!file-loader!./favicon.png';
import * as PropTypes from 'prop-types';
import typography from './utils/typography';

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style id="gatsby-inlined-css"
               dangerouslySetInnerHTML={{ __html: stylesStr }} />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0" />
          {this.props.headComponents}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description"
                content="A collection of speculative fiction stories" />
          <link rel="icon" type="image/png" href={favicon} />
          <title>SFiction</title>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography}/>
          {css}
        </head>
        <body>
          <div className="body"
               id="___gatsby"
               dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

module.exports = Html
