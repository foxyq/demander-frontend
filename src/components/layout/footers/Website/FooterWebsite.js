import React from 'react'

export default class FooterWebsite extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <nav className="pull-left">
              <ul>
                <li>
                  <a href="http://www.creative-tim.com">
                    Creative Tim
                    <div className="ripple-container" />
                  </a>
                </li>
                <li>
                  <a href="http://presentation.creative-tim.com">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="http://www.creative-tim.com/license">
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="copyright pull-right">
              © 2017, made with
              {' '}
              <i className="material-icons">favorite</i>
              {' '}
              by Creative Tim for a better web.
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
