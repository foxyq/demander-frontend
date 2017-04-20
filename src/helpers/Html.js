import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom/server'
import serialize from 'serialize-javascript'
import Helmet from 'react-helmet'

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object,
  }

  render() {
    const { assets, component, store } = this.props
    const content = component ? ReactDOM.renderToString(component) : ''
    const head = Helmet.rewind()

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
          />
          <link
            href="http://demander.cz/css/live/material-kit.css"
            rel="stylesheet"
          />
          <link href="http://demander.cz/css/live/demo.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
          />
          <script
            src="http://demander.cz/js/live/jquery.min.js"
            type="text/javascript"
          />
          <script
            src="http://demander.cz/js/live/bootstrap.min.js"
            type="text/javascript"
          />
          <script src="http://demander.cz/js/live/material.min.js" />
          <script
            src="http://demander.cz/js/live/nouislider.min.js"
            type="text/javascript"
          />
          <script
            src="http://demander.cz/js/live/bootstrap-datepicker.js"
            type="text/javascript"
          />
          <script
            src="http://demander.cz/js/live/material-kit.js"
            type="text/javascript"
          />
          {/* <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&amp;subset=latin-ext"
            rel="stylesheet"
          /> */}
          <link rel="stylesheet" type="text/css" href="/dist/iconfont.css" />
          {/* <script
            type="text/javascript"
            src="https://maps.google.com/maps/api/js?key=AIzaSyCM1wM1pG1A8LNCj295JRv0nW1NOAZc3v8&amp;libraries=places"
          /> */}
          {Object.keys(assets.styles).map((style, key) => (
            <link
              href={assets.styles[style]}
              key={key}
              media="screen, projection"
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
            />
          ))}
          {/* <link
            href="/dist/main-styles-less.css"
            media="screen, projection"
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
          /> */}
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__data=${serialize(store.getState())};`,
            }}
            charSet="UTF-8"
          />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <script src={assets.javascript.vendor} charSet="UTF-8" />
          {__DEVELOPMENT__ && [
            <script
              key="dlls__vendor"
              src="/dist/dlls/dll__vendor.js"
              charSet="UTF-8"
            />,
          ]}
          <script src={assets.javascript.main} charSet="UTF-8" />
        </body>
      </html>
    )
  }
}
