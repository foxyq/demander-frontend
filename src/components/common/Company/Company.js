import React, { PropTypes } from 'react'
// import style from './Company'

export default class Company extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }
  render() {
    const { item, isAdmin } = this.props

    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="card card-profile card-rotate">

          <div className="card-image">
            <div className="front">
              <img
                className="img"
                // src="http://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile7.jpg"
                src={item.logo_url}
              />
            </div>
          </div>

          <div className="card-content">
            <h4 className="card-title">{item.company_name}</h4>
            <h6 className="category text-gray text-center">
              {item.company_vat_id}
            </h6>
            <p className="card-description">
              {item.company_about}
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
