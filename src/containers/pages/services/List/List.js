import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {
  getServices,
  deleteService,
} from 'redux/modules/api/services' /* , deleteService*/
import { getCategories } from 'redux/modules/api/categories'

import { Listing, Loading, Tabs } from 'components/common'

@connect(
  ({ api }) => ({
    services: api.services.getServices.data,
    categories: api.categories.getCategories.data,
    isLoading: api.services.getServices.isLoading,
  }),
  { getServices, deleteService, getCategories },
)
export default class List extends Component {
  static propTypes = {
    getServices: PropTypes.func.isRequired,
    deleteService: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    services: PropTypes.array,
    categories: PropTypes.array,
    getCategories: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getServices('sort=-created_date')
    this.props.getCategories()
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
    const { services, isLoading, categories } = this.props

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

        <Tabs items={categories} />

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
