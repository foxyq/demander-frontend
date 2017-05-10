import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedRelative } from 'react-intl'
import style from './ListingItem.styl'

export default class ListingItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    controller: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    isAdmin: PropTypes.bool.isRequired,
  }

  deleteClick(id) {
    this.props.onDelete(id)
  }

  render() {
    const { item, controller, isAdmin } = this.props

    return (
      <div className="col-xs-12 col-sm-6 col-md-4">

        <div className="card card-blog">

          <div className="card-content">
            {/*  category clas color, category name */}
            <h6 className="category text-success">
              {/* {item.category.title} */}
            </h6>
            <h4 className={`${style.heading} card-title`}>
              <a href="#pablo">
                {/* nech je nadpis do 2 riadkov max - obmedzenie na znaky */}
                {item.title}
              </a>
            </h4>

            <p className="card-description">
              {item.goal}
            </p>
            <br />

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
              <div className="author">
                <a href={`/company/${item.company._id}`}>
                  {/*  company IMG */}
                  <img
                    src={item.company.logo_url}
                    alt="..."
                    className="avatar img-raised"
                  />
                  {/*  company name */}
                  <span>{item.company.company_nice_name}</span>
                </a>
              </div>
              <div className="stats">
                <i className="material-icons">schedule </i>
                <FormattedRelative value={item.created_date} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
