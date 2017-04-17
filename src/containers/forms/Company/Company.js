import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { schema } from 'models/company'

import { Input } from 'components/fields'

import {
  getCompanies,
  createCompany,
  getCompany,
  editCompany,
} from 'redux/modules/api/companies'

import validate from './company.validation'

@connect(
  ({ api }, { params }) => ({
    isSubmitting: api.companies.createCompany.isSubmitting,
    initialValues: params.id !== 'new' && api.companies.getCompany.data,
  }),
  { createCompany, getCompanies, getCompany, editCompany },
)
@reduxForm({
  form: 'Company',
  enableReinitialize: true,
  validate,
})
export default class Company extends Component {
  static propTypes = {
    // This is from redux form
    handleSubmit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    getCompanies: PropTypes.func.isRequired,
    getCompany: PropTypes.func.isRequired,
    editCompany: PropTypes.func.isRequired,
    createCompany: PropTypes.func.isRequired,
  }

  state = {
    error: null,
  }

  componentDidMount() {
    const companyId = this.props.params.id
    const isEditing = companyId !== 'new'

    if (isEditing) {
      this.props.getCompany(companyId)
    }
  }

  // This is the actual submit method called on successful form submit
  handleSubmit = model => {
    const companyId = this.props.params.id
    const isEditing = companyId !== 'new'

    const action = isEditing ? this.props.editCompany : this.props.createCompany
    const values = schema(model)

    action(values, companyId).then(this.handleSuccess).catch(this.handleError)
  }

  handleSuccess = () => {
    this.props.getCompanies()

    browserHistory.push('/companies')
  }

  handleError = error => this.setState({ error })

  render() {
    const { handleSubmit, isSubmitting } = this.props
    const { error } = this.state

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Input label="company_name" name="company_name" />

        <input type="submit" />

        {isSubmitting && <div>Submitting...</div>}

        {error && <div>{error}</div>}
      </form>
    )
  }
}
