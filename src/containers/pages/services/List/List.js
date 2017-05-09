import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {
  getServices,
  deleteService,
} from 'redux/modules/api/services' /* , deleteService*/

import { Listing, Loading } from 'components/common'

@connect(
  ({ api }) => ({
    services: api.services.getServices.data,
    isLoading: api.services.getServices.isLoading,
  }),
  { getServices, deleteService },
)
export default class List extends Component {
  static propTypes = {
    getServices: PropTypes.func.isRequired,
    deleteService: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    services: PropTypes.array,
  }

  componentDidMount() {
    this.props.getServices('sort=-created_date')
  }

  handleDeleteService = serviceId => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      this.props.deleteService(serviceId).then(() => {
        this.props.getServices()
      })
    }
  }

  render() {
    const { services, isLoading } = this.props

    return (
      <div>
        {isLoading && <Loading />}

        <div className="row">
          <div className="profile">
            <div className="name">
              <h3 className="title">Přehled služeb</h3>
              <h6>Aktuální nabízené služby v systému Demander</h6>
            </div>
            <div className="text-center">
              <Link to={'/services/new'} className="btn btn-success btn-lg">
                Přidat službu<div className="ripple-container" />
              </Link>
            </div>
          </div>
        </div>

        {/* row with tabs */}
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="profile-tabs">
              <div className="nav-align-center">
                <ul className="nav nav-pills" role="tablist">
                  <li className="">
                    <a
                      href="#studio"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="material-icons">flip_to_back</i>
                      Textil
                    </a>
                  </li>
                  <li className="active">
                    <a
                      href="#work"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="true"
                    >
                      <i className="material-icons">build</i>
                      Služby
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#shows"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="material-icons">attach_money</i>
                      Finance
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#shows"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="material-icons">computer</i>
                      IT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <Listing
            items={services}
            controller="services"
            onDelete={this.handleDeleteService}
            isAdmin
          />

        </div>
      </div>
    )
  }
}
