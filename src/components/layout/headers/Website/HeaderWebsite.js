import React from 'react'
import { Link, IndexLink } from 'react-router'
// import { connect } from 'react-redux'

export default class HeaderWebsite extends React.Component {
  static PropTypes = {
    logo: React.PropTypes.object,
  }
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-color-on-scroll navbar-transparent">
        <div className="container">
          <div className="navbar-header">
            {/* hamburger */}
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
            {/* hamburger */}
            {this.props.logo}
          </div>

          <div className="collapse navbar-collapse" id="navigation-index">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <IndexLink to="/" activeClassName="active">Domů</IndexLink>
              </li>
              <li>
                <Link to="/demands" activeClassName="active">Poptávky</Link>
              </li>
              <li>
                <Link to="/services" activeClassName="active">Služby</Link>
              </li>
              <li>
                <Link to="/companies" activeClassName="active">
                  Dodavatelé
                </Link>
              </li>
              <li>
                <Link to="/howitworks" activeClassName="active">
                  Jak to funguje?
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">
                  Kontakt
                </Link>
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
