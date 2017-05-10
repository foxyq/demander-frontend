import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { schema } from 'models/demand'

import { Input, TextArea } from 'components/fields'

import {
  getDemands,
  createDemand,
  getDemand,
  editDemand,
} from 'redux/modules/api/demands'

import { getCompanies } from 'redux/modules/api/companies'

import validate from './demand.validation'

@connect(
  ({ api }, { params }) => ({
    isSubmitting: api.demands.createDemand.isSubmitting,
    initialValues: params.id !== 'new' && api.demands.getDemand.data,
    companies: api.companies.getCompanies.data,
  }),
  { createDemand, getDemands, getDemand, editDemand, getCompanies },
)
@reduxForm({
  form: 'Demand',
  enableReinitialize: true,
  validate,
})
export default class Demand extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool,
    getDemands: PropTypes.func.isRequired,
    getDemand: PropTypes.func.isRequired,
    editDemand: PropTypes.func.isRequired,
    createDemand: PropTypes.func.isRequired,
    getCompanies: PropTypes.func.isRequired,
    // companies: PropTypes.array,
    initialValues: PropTypes.array,
    //selectValue: PropTypes.string,
    //reformattedOptions: PropTypes.array,
  }

  state = {
    error: null,
  }

  componentDidMount() {
    const demandId = this.props.params.id
    const isEditing = demandId !== 'new'

    this.props.getCompanies()

    if (isEditing) {
      this.props.getDemand(demandId)
    }
    console.log('componentDidMount - PREBEHLO')
    console.log(this.props.initialValues)

    // console.log(this.props.initialValues.company._id)

    // this.props.companies.map(company => {
    //   console.log(company._id)
    // })
    // console.log(this.props.companies)
    // console.log(this.props.reformattedOptions)
    // console.log(this.props.reformattedOptions)

    // const pomocna = this.props.companies.map(company => {
    //   const rObj = {}
    //
    //   rObj.value = company._id
    //   rObj.label = company.company_name
    //   return rObj
    // })

    // this.props.reformattedOptions = pomocna

    // console.log('toto je pomocna: ', pomocna)
    // console.log('toto je pomocna 2: ', this.props.reformattedOptions)
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
    // const { handleSubmit, isSubmitting, companies } = this.props
    const { handleSubmit, isSubmitting } = this.props

    const { error } = this.state

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Input label="Demand title" name="title" />
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
        <TextArea label="Goal" name="goal" rows="5" />
        <TextArea label="Input" name="input" />
        <TextArea label="Output" name="output" />
        <TextArea label="Timeplan" name="timeplan" />
        <Input label="Budget" name="budget" />
        <TextArea label="Description" name="description" />
        <Input label="Responsible person" name="responsible_person" />
        {/* <Input label="Company" name="company" /> */}
        <div className="form-group">
          <label>Company</label>
          <div>
            <Field name="company" component="select" className="form-control">
              <option value="58f7f61cff8d4014d7f7730b">
                Vodafone Czech Republic a.s.
              </option>
              <option value="58f7f61fff8d4014d7f7730c">
                Československá obchodní banka, a. s.
              </option>
              <option value="58f7f60fff8d4014d7f7730a">
                CGI IT Czech Republic s.r.o.
              </option>
              <option value="58f7f63eff8d4014d7f7730d">
                PARCO Consulting s.r.o.
              </option>
              <option value="58f7f645ff8d4014d7f7730f">
                Komerční banka, a.s.
              </option>
            </Field>
          </div>
        </div>

        {/* {
          (reformattedOptions = companies.map(obj => {
            var rObj = {}

            rObj[obj.value] = obj._id
            rObj[obj.label] = obj.company_name
            return rObj
          }))
        } */}

        {/* <SimpleSelect
          label="Company"
          name="company"
          value="xxx"
          // options={companies}
          options={this.props.companies.map(company => {
            const rObj = {}

            rObj.value = company._id
            rObj.label = company.company_name
            return rObj
          })}
        /> */}

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
