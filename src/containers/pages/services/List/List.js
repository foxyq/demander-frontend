import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {
  getServices,
  deleteService,
} from 'redux/modules/api/services' /* , deleteService*/

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
        {isLoading && <h1>loader gif</h1>}
        {services &&
          services.length > 0 &&
          services.map(service => (
            <div key={service._id}>
              {`id: ${service._id}, name: ${service.title}`}

              <Link
                to={`/services/${service._id}`}
                className="btn btn-info btn-lg"
              >
                Edit<div className="ripple-container" />
              </Link>

              <button
                className="btn btn-danger btn-lg"
                type="button"
                onClick={() => this.handleDeleteService(service._id)}
              >
                Delete<div className="ripple-container" />
              </button>
            </div>
          ))}
        <Link to={'/services/new'} className="btn btn-success btn-lg">
          Create service<div className="ripple-container" />
        </Link>
      </div>
    )
  }
}
