import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'
import style from './Company.styl'
// import Truncate from 'react-truncate'

export default class Company extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    controller: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onFilter: PropTypes.func,
  }

  deleteClick(id) {
    this.props.onDelete(id)
  }
  filterClick(id) {
    this.props.onFilter(id)
  }

  render() {
    const { item, isAdmin, controller } = this.props

    // let desc = item.company_about
    // desc = desc.substring(0, 150)

    return (
      <div
        id={style.company_card}
        className="col-xs-12 col-sm-6 col-md-4 text-center"
      >
        <div className="card card-signup">
          <div
            className={cx('header header-primary text-center', style.headerfix)}
          >
            <h4>{item.company_nice_name}</h4>

            <div className="social-line">
              {item.fb_url &&
                <a
                  href={item.fb_url}
                  className="btn btn-simple btn-just-icon"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                </a>}
              {item.twitter_url &&
                <a
                  href={item.twitter_url}
                  className="btn btn-simple btn-just-icon"
                  target="_blank"
                >
                  <i className="fa fa-twitter" />
                </a>}
              {item.linkedin_url &&
                <a
                  href={item.linkedin_url}
                  className="btn btn-simple btn-just-icon"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>}
              {item.web_url &&
                <a
                  href={item.web_url}
                  className="btn btn-simple btn-just-icon"
                  target="_blank"
                >
                  <i className="fa fa-dribbble" />
                </a>}

            </div>
          </div>

          <div className="card-content">
            <h4 className="card-title text-center">
              <Link to={`/company/${item._id}`}>
                <img
                  className={style.logo}
                  // src="http://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile7.jpg"
                  src={item.logo_url}
                />
              </Link>
            </h4>
            <h6
              className="category text-gray text-center"
              onClick={() => this.filterClick(item.category._id)}
            >
              {/* {item.company_vat_id} */}
              {item.category.title}
            </h6>
            <p className="card-description">
              {item.slogan}
            </p>

            <div className={style.bottomfeeder}>
              {/* admin buttons */}
              {isAdmin &&
                <span>
                  <Link
                    to={`/${controller}/${item._id}`}
                    className="btn btn-info btn-xs"
                  >
                    Upraviť
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs"
                    onClick={() => this.deleteClick(item._id)}
                  >
                    Delete
                  </button>
                </span>}
              {/* admin buttons */}
            </div>

            {/* <div className="footer">
              <a
                href="#pablo"
                className="btn btn-just-icon btn-twitter btn-simple"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                href="#pablo"
                className="btn btn-just-icon btn-linkedin btn-simple"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href="#pablo"
                className="btn btn-just-icon btn-dribbble btn-simple"
              >
                <i className="fa fa-dribbble" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
