import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
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
        <Input label="Company nice name" name="company_nice_name" />
        <div className="form-group">
          <label>Category</label>
          <div>
            <Field name="category" component="select" className="form-control">
              <option value="590ee92404e3b306921354ad">
                Zemědelství
              </option>
              <option value="590eeaa404e3b306921354ae">
                Lesnictví
              </option>
              <option value="5911936c918f35178a5bfc6f">
                Průmysl
              </option>
              <option value="59119427918f35178a5bfc70">
                Energetika
              </option>
              <option value="591194b5918f35178a5bfc71">
                Voda
              </option>
              <option value="59119538918f35178a5bfc72">
                Stavebnictví
              </option>
              <option value="591195c6918f35178a5bfc73">
                Obchod
              </option>
              <option value="59119676918f35178a5bfc74">
                Doprava
              </option>
              <option value="5911970b918f35178a5bfc75">
                Restauraterství
              </option>
              <option value="5911977f918f35178a5bfc76">
                IT
              </option>
              <option value="5911985b918f35178a5bfc77">
                Finance
              </option>
            </Field>
          </div>
        </div>
        <Input label="Company ID" name="company_id" />
        <Input label="Company VAT ID" name="company_vat_id" />
        <TextArea label="About company" name="company_about" />
        <Input label="Description" name="company_description" />
        <Input label="Opening hours" name="company_opening_hours" />
        <Input label="Telephone" name="contact_telephone" />
        <Input label="Email" name="contact_email" />
        <Input label="Address" name="contact_address" />
        <Input label="Contact person" name="contact_person" />
        <Input label="GPS location" name="company_gps_location" />
        <Input label="Logo URL" name="logo_url" />
        <Input label="Web URL" name="web_url" />
        <Input label="Facebook URL" name="fb_url" />
        <Input label="Twitter URL" name="twitter_url" />
        <Input label="LinkedIn URL" name="linkedin_url" />

        <Input label="Slogan" name="slogan" />
        <input
          type="submit"
          className="btn btn-lg btn-success"
          value="Přidat"
        />

        {isSubmitting && <div>Submitting...</div>}

        {error && <div>{error}</div>}
      </form>
    )
  }
}
