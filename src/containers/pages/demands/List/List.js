import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getDemands, deleteDemand } from 'redux/modules/api/demands'
import { getCategories } from 'redux/modules/api/categories'

import { Listing, Loading } from 'components/common'

@connect(
  ({ api }) => ({
    demands: api.demands.getDemands.data,
    isLoading: api.demands.getDemands.isLoading,
    categories: api.categories.getCategories.data,
  }),
  { getDemands, deleteDemand, getCategories },
)
export default class List extends Component {
  static propTypes = {
    getDemands: PropTypes.func.isRequired,
    deleteDemand: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    demands: PropTypes.array,
    categories: PropTypes.array,
  }

  componentDidMount() {
    this.props.getDemands('sort=-created_date')
    this.props.getCategories()
    console.log(this.props.demands)
  }

  handleDeleteDemand = demandId => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      this.props.deleteDemand(demandId).then(() => {
        this.props.getDemands()
      })
    }
  }

  render() {
    const { demands, isLoading, categories } = this.props

    return (
      <div>

        {isLoading && <Loading />}
        <div className="row">
          <div className="profile">
            <div className="name">
              <h3 className="title">Seznam poptávek</h3>
              <h6>Aktuální poptávky v systému Demander</h6>
            </div>
            <div className="text-center">
              <Link to={'/demands/new'} className="btn btn-success btn-lg">
                Vytvořit poptávku<div className="ripple-container" />
              </Link>
            </div>
          </div>
        </div>

        {/* row with tabs */}
        <div className="row">
          <div className="col-md-12">
            <div className="profile-tabs">
              <div className="nav-align-center">
                <ul className="nav nav-pills" role="tablist">

                  {categories &&
                    categories.length > 0 &&
                    categories.map(category => (
                      <li className="">
                        <a
                          href="#studio"
                          role="tab"
                          data-toggle="tab"
                          aria-expanded="false"
                        >
                          <i className="material-icons">{category.icon}</i>
                          {category.title}
                        </a>
                      </li>
                    ))}

                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <li className="active">
          <a href="#work" role="tab" data-toggle="tab" aria-expanded="true">
            <i className="material-icons">build</i>
            Služby
          </a>
        </li>
        <li className="">
          <a href="#shows" role="tab" data-toggle="tab" aria-expanded="false">
            <i className="material-icons">attach_money</i>
            Finance
          </a>
        </li>
        <li className="">
          <a href="#shows" role="tab" data-toggle="tab" aria-expanded="false">
            <i className="material-icons">computer</i>
            IT
          </a>
        </li> */}

        <Listing
          items={demands}
          controller="demands"
          onDelete={this.handleDeleteDemand}
          isAdmin
        />

      </div>
    )
  }
}
