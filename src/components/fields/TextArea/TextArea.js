import React, { Component } from 'react'
import { Field } from 'redux-form'
import cx from 'classnames'
import style from './text-area.styl'

export default class Input extends Component {
  static propTypes = {
    onInputChange: React.PropTypes.func,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
  }

  // shouldComponentUpdate() {
  //   return false
  // }

  handleChange = (e, field) => {
    if (this.props.onInputChange) {
      this.props.onInputChange(e.target.value)
    }
    field.input.onChange(e.target.value)
  }

  autoGrow = element => {
    element.style.height = '5px'
    element.style.height = element.scrollHeight + 'px'
  }

  renderField = field => {
    // const { type } = this.props
    const { meta, input } = field

    return (
      <div>
        <div
          className={cx({
            [style.container]: true,
            // [style.hasValue]: hasValue,
            // [style.hasError]: touched && error,
            // [style.disabled]: disabled,
          })}
        >
          <textarea
            // className="form-control `${style.textArea}`"
            className={cx('form-control', style.textArea)}
            // className={style.container}
            rows={5}
            {...input}
            // type={'textarea'}
            onChange={e => this.handleChange(e, field)}
          />
          {meta.touched &&
            meta.error &&
            <span className="form-control-error">{meta.error}</span>}
        </div>
      </div>
    )
  }

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
