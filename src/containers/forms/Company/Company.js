import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { schema } from 'models/company'

import { Input, TextArea } from 'components/fields'

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
    isSubmitting: PropTypes.bool,
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
    browserHistory.goBack()
  }

  handleError = error => this.setState({ error })

  render() {
    const { handleSubmit, isSubmitting } = this.props
    const { error } = this.state

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Input label="Company name" name="company_name" />
        <Input label="Company ID" name="company_id" />
        <Input label="Company VAT ID" name="company_vat_id" />
        {/* <TextArea
          rows="4"
          cols="50"
          label="About company"
          name="company_about"
        /> */}
        <TextArea label="About company" name="company_about" />
        <Input label="Description" name="company_description" />
        <Input label="Opening hours" name="company_opening_hours" />
        <Input label="Telephone" name="contact_telephone" />
        <Input label="Email" name="contact_email" />
        <Input label="Address" name="contact_address" />
        <Input label="Contact person" name="contact_person" />
        <Input label="Categorization" name="categorization" />
        <Input label="Slogan" name="slogan" />
        <input type="submit" />

        {isSubmitting && <div>Submitting...</div>}

        {error && <div>{error}</div>}
      </form>
    )
  }
}
