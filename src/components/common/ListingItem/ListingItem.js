import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedRelative } from 'react-intl'
import style from './ListingItem.styl'

export default class ListingItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    controller: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onFilter: PropTypes.func,
    isAdmin: PropTypes.bool.isRequired,
  }

  deleteClick(id) {
    this.props.onDelete(id)
  }
  filterClick(id) {
    this.props.onFilter(id)
  }

  render() {
    const { item, controller, isAdmin } = this.props

    return (
      <div className="col-xs-12 col-sm-6 col-md-4 text-center">

        <div className="card card-blog">

          <div className="card-content">
            <h6
              className="category text-success"
              style={{ color: item.category.color_code }}
              onClick={() => this.filterClick(item.category._id)}
            >
              {item.category.title}
            </h6>
            <h4 className={`${style.heading} card-title`}>
              <a href="#">
                {/* nech je nadpis do 2 riadkov max - obmedzenie na znaky */}
                {item.title}
              </a>
            </h4>

            <p className="card-description">
              {item.goal}
              {!item.goal && item.description}
            </p>
            {/* admin buttons */}
            <div className={style.bottomfeeder}>
              {isAdmin &&
                <span>
                  <Link
                    to={`/${controller}/${item._id}`}
                    className="btn btn-info btn-xs"
                  >
                    Upravit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs"
                    onClick={() => this.deleteClick(item._id)}
                  >
                    Odstranit
                  </button>
                </span>}
              {/* admin buttons */}

              <div className="footer">
                <div className="author pull-left">
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
              {/* /footer */}

            </div>
            {/* bottomfeeder */}
          </div>
        </div>
      </div>
    )
  }
}
