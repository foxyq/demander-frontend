import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { schema } from 'models/service'

import { Input } from 'components/fields'

import {
  getServices,
  createService,
  getService,
  editService,
} from 'redux/modules/api/services'

import validate from './service.validation'

@connect(
  ({ api }, { params }) => ({
    isSubmitting: api.services.createService.isSubmitting,
    initialValues: params.id !== 'new' && api.services.getService.data,
  }),
  { createService, getServices, getService, editService },
)
@reduxForm({
  form: 'Service',
  enableReinitialize: true,
  validate,
})
export default class Service extends Component {
  static propTypes = {
    // This is from redux form
    handleSubmit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool,
    getServices: PropTypes.func.isRequired,
    getService: PropTypes.func.isRequired,
    editService: PropTypes.func.isRequired,
    createService: PropTypes.func.isRequired,
  }

  state = {
    error: null,
  }

  componentDidMount() {
    const serviceId = this.props.params.id
    const isEditing = serviceId !== 'new'

    if (isEditing) {
      this.props.getService(serviceId)
    }
  }

  // This is the actual submit method called on successful form submit
  handleSubmit = model => {
    const serviceId = this.props.params.id
    const isEditing = serviceId !== 'new'

    const action = isEditing ? this.props.editService : this.props.createService
    const values = schema(model)

    action(values, serviceId).then(this.handleSuccess).catch(this.handleError)
  }

  handleSuccess = () => {
    this.props.getServices()

    // browserHistory.push('/services')
    browserHistory.goBack()
  }

  handleError = error => this.setState({ error })

  render() {
    const { handleSubmit, isSubmitting } = this.props
    const { error } = this.state

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Input label="Service title" name="title" />

        <input type="submit" />

        {isSubmitting && <div>Submitting...</div>}

        {error && <div>{error}</div>}
      </form>
    )
  }
}
