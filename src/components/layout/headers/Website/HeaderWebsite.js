import React from 'react'
import { Link, IndexLink } from 'react-router'
// import { connect } from 'react-redux'

export default class HeaderWebsite extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-color-on-scroll">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navigation-index"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a href="http://www.creative-tim.com">
              <div className="logo-container">
                <div className="logo">
                  <img
                    src="http://demos.creative-tim.com/material-kit/assets/img/logo.png"
                    alt="Creative Tim Logo"
                    rel="tooltip"
                    title=""
                    data-placement="bottom"
                    data-html="true"
                    data-original-title="<b>Material Kit</b> was Designed &amp; Coded with care by the staff from <b>Creative Tim</b>"
                  />
                </div>
                <div className="brand">
                  Creative Tim
                </div>

              </div>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navigation-index">
            <ul className="nav navbar-nav navbar-left">
              {/* <li>
                <a href="components-documentation.html" target="_blank">
                  <i className="material-icons">dashboard</i> Components
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">cloud_download</i> Download
                </a>
              </li> */}
              <li>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>

              </li>
              <li>
                <Link to="/companies" activeClassName="active">Companies</Link>

              </li>
              <li>
                <Link to="/users" activeClassName="active">Users</Link>
              </li>
              <li>
                <Link to="/demands" activeClassName="active">Demands</Link>

              </li>
              <li>
                <Link to="/services" activeClassName="active">Services</Link>

              </li>
              <li>
                <Link to="/fancy" activeClassName="active">Test page</Link>
              </li>

            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  target="_blank"
                  className="btn btn-white btn-simple btn-just-icon"
                  data-original-title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  target="_blank"
                  className="btn btn-white btn-simple btn-just-icon"
                  data-original-title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                </a>
              </li>
              <li>
                <a
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  target="_blank"
                  className="btn btn-white btn-simple btn-just-icon"
                  data-original-title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram" />
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
