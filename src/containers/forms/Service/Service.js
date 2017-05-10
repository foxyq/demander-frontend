import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { schema } from 'models/service'

import { Input, TextArea } from 'components/fields'

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
        <div>
          <label>Category</label>
          <div>
            <Field name="category" component="select">
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
        <Input label="Location" name="location" />
        <TextArea label="Description" name="description" rows="5" />
        <div>
          <label>Company</label>
          <div>
            <Field name="company" component="select">
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

        <input type="submit" />

        {isSubmitting && <div>Submitting...</div>}

        {error && <div>{error}</div>}
      </form>
    )
  }
}
