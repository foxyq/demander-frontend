import React from 'react'
import { Link, IndexLink } from 'react-router'
// import { connect } from 'react-redux'

export default class HeaderWebsite extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-color-on-scroll navbar-transparent">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navigation-index"
            >
              <span className="sr-only">Navigace</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a href="#">
              <div className="logo-container">
                <div className="logo">
                  <img
                    src={require('assets/img/logo.png')}
                    height="45"
                    alt="Demander.cz logo"
                    rel="tooltip"
                    title=""
                    data-placement="bottom"
                    data-html="true"
                    data-original-title="<b>Demander.cz</b> revoluce v systému obchodování"
                  />
                </div>
                {/* <div className="brand">
                  {/* Creative Tim */}
                {/* </div> */}

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
                <IndexLink to="/" activeClassName="active">Domů</IndexLink>

              </li>
              <li>
                <Link to="/services" activeClassName="active">Nabídky</Link>

              </li>
              <li>
                <Link to="/demands" activeClassName="active">Poptávky</Link>

              </li>

              <li>
                <Link to="/companies" activeClassName="active">
                  Společnosti
                </Link>

              </li>
              <li>
                <Link to="/users" activeClassName="active">Použivatelé</Link>
              </li>

              <li>
                <Link to="/fancy" activeClassName="active">Test</Link>
              </li>

            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="#"
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
                  href="#"
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
                  href="#"
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
