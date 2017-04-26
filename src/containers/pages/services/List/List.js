import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {
  getServices,
  deleteService,
} from 'redux/modules/api/services' /* , deleteService*/

import Listing from 'components/common/Listing/Listing'

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
    this.props.getServices()
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
        {isLoading &&
          <img src="https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif" />}

        <Link to={'/services/new'} className="btn btn-success btn-lg">
          Create service<div className="ripple-container" />
        </Link>

        <hr /> <br />
        <div className="container">
          <h2>
            Nase service
          </h2>

          <Listing
            items={services}
            controller="services"
            onDelete={this.handleDeleteService}
            isAdmin="true"
          />

        </div>
      </div>
    )
  }
}
