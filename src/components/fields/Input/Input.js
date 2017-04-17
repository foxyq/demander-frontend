import React, { Component } from 'react'
import { Field } from 'redux-form'
import './input.styl'

export default class Input extends Component {
  static propTypes = {
    onInputChange: React.PropTypes.func,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string
  };

  // shouldComponentUpdate() {
  //   return false
  // }

  handleChange = (e, field) => {
    if (this.props.onInputChange) {
      this.props.onInputChange(e.target.value)
    }
    field.input.onChange(e.target.value)
  };

  renderField = field => {
    const { type } = this.props
    const { meta, input } = field

    return (
      <div>
        <input
          className="form-control"
          {...input}
          type={type || 'text'}
          onChange={e => this.handleChange(e, field)}
        />
        {meta.touched &&
          meta.error &&
          <span className="form-control-error">{meta.error}</span>}
      </div>
    )
  };

  render() {
    const { label, name } = this.props

    return (
      <div className="form-group">
        <label htmlFor={name} className="control-label">{label}</label>
        <Field id={name} name={name} component={this.renderField} />
      </div>
    )
  }
}
