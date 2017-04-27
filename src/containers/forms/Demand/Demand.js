import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { schema } from 'models/demand'

import { Input } from 'components/fields'

import {
  getDemands,
  createDemand,
  getDemand,
  editDemand,
} from 'redux/modules/api/demands'

import validate from './demand.validation'

@connect(
  ({ api }, { params }) => ({
    isSubmitting: api.demands.createDemand.isSubmitting,
    initialValues: params.id !== 'new' && api.demands.getDemand.data,
  }),
  { createDemand, getDemands, getDemand, editDemand },
)
@reduxForm({
  form: 'Demand',
  enableReinitialize: true,
  validate,
})
export default class Demand extends Component {
  static propTypes = {
    // This is from redux form
    handleSubmit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    getDemands: PropTypes.func.isRequired,
    getDemand: PropTypes.func.isRequired,
    editDemand: PropTypes.func.isRequired,
    createDemand: PropTypes.func.isRequired,
  }

  state = {
    error: null,
  }

  componentDidMount() {
    const demandId = this.props.params.id
    const isEditing = demandId !== 'new'

    if (isEditing) {
      this.props.getDemand(demandId)
    }
  }

  // This is the actual submit method called on successful form submit
  handleSubmit = model => {
    const demandId = this.props.params.id
    const isEditing = demandId !== 'new'

    const action = isEditing ? this.props.editDemand : this.props.createDemand
    const values = schema(model)

    action(values, demandId).then(this.handleSuccess).catch(this.handleError)
  }

  handleSuccess = () => {
    this.props.getDemands()
    browserHistory.goBack()
    // browserHistory.push('/demands')
  }

  handleError = error => this.setState({ error })

  render() {
    const { handleSubmit, isSubmitting } = this.props
    const { error } = this.state

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Input label="Demand title" name="title" />

        <input type="submit" />

        {isSubmitting && <div>Submitting...</div>}

        {error && <div>{error}</div>}
      </form>
    )
  }
}
