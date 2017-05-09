import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// import style from './Company'
// import Truncate from 'react-truncate'

export default class Company extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    controller: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
  }

  deleteClick(id) {
    this.props.onDelete(id)
  }
  render() {
    const { item, isAdmin, controller } = this.props

    let desc = item.company_about

    desc = desc.substring(0, 150)

    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="card card-profile card-rotate">

          <div className="card-image">
            <div className="front">
              <Link to={`/company/${item._id}`}>
                <img
                  className="img"
                  // src="http://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile7.jpg"
                  src={item.logo_url}
                />
              </Link>
            </div>
          </div>

          <div className="card-content">
            <h4 className="card-title">
              <Link to={`/company/${item._id}`}>{item.company_name}</Link>
            </h4>
            <h6 className="category text-gray text-center">
              {item.company_vat_id}
            </h6>
            <p className="card-description">

              {/* ({item.company_about}).substring(0, 15); */}
              {desc}

            </p>

            {/* admin buttons */}
            {isAdmin &&
              <span>
                <Link to={`/${controller}/${item._id}`}>
                  Upraviť
                </Link>
                <button
                  type="button"
                  onClick={() => this.deleteClick(item._id)}
                >
                  Delete
                </button>
              </span>}
            {/* admin buttons */}

            <div className="footer">
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}
