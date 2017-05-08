import React, { Component } from 'react'
import cx from 'classnames'
import { injectIntl, FormattedMessage } from 'react-intl'
import ReactSelect from 'react-select'
import { Field } from 'redux-form'

import css from 'react-css-modules'
import styles from './select.styl'

@css(styles)
@injectIntl
export default class Select extends Component {
  static propTypes = {
    autoload: React.PropTypes.bool,
    withoutClear: React.PropTypes.bool,
    updater: React.PropTypes.any,
    options: React.PropTypes.array,
    autocomplete: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    field: React.PropTypes.object,
    onInputChange: React.PropTypes.func,
    promise: React.PropTypes.func,
    loadOptions: React.PropTypes.any,
    labelSmall: React.PropTypes.bool,
    intl: React.PropTypes.object,
    placeholder: React.PropTypes.shape({
      id: React.PropTypes.string,
      defaultMessage: React.PropTypes.string,
    }),
    onSelectChange: React.PropTypes.func,
    onClear: React.PropTypes.func,
    styles: React.PropTypes.object,
    searchable: React.PropTypes.bool,
    label: React.PropTypes.shape({
      id: React.PropTypes.string,
      defaultMessage: React.PropTypes.string,
    }),
    name: React.PropTypes.string.isRequired,
    wrapperClassName: React.PropTypes.string,
    inlineLabel: React.PropTypes.bool,
  }

  shouldComponentUpdate(nextProps) {
    const { disabled, updater, autocomplete } = this.props

    if (disabled !== nextProps.disabled || updater !== nextProps.updater) {
      return true
    }

    return !autocomplete
  }

  handleChange = (field, obj) => {
    if (this.props.onSelectChange) {
      this.props.onSelectChange(obj.value)
    }
    field.input.onChange(obj.value)
  }

  handleInputChange = (field, obj) => {
    if (this.props.onInputChange) {
      this.props.onInputChange(obj.value)
    }
  }

  handleClear = field => {
    if (this.props.onSelectChange) {
      this.props.onSelectChange(null)
    }

    if (this.props.onClear) {
      this.props.onClear()
    }

    field.input.onChange(null)
  }

  renderField = field => {
    const {
      name,
      options = [],
      autocomplete,
      disabled,
      placeholder,
      loadOptions,
      intl,
      searchable,
      withoutClear,
    } = this.props
    const styleNames = this.props.styles

    const { input, meta } = field

    const { touched, error } = meta

    const placeholderValue =
      placeholder && placeholder.id && intl.formatMessage(placeholder)

    return (
      <div
        className={cx({
          [styleNames.controls]: true,
          [styleNames.hasError]: touched && error,
          [styleNames.clearable]: !withoutClear,
        })}
      >
        {autocomplete &&
          <ReactSelect.Async
            value={input.value}
            onChange={val => this.handleChange(field, val)}
            className="form-control--select"
            loadOptions={loadOptions}
            {...this.props}
            placeholder={placeholderValue}
            searchPromptText="Zadaj hľadaný výraz."
            noResultsText="Nenašli sa žiadne výsledky"
            cache={false}
            id={name}
            disabled={disabled}
            searchable={searchable}
            ignoreAccents={false}
          />}
        {!autocomplete &&
          <ReactSelect
            value={input.value}
            onChange={val => this.handleChange(field, val)}
            onInputChange={val => this.handleInputChange(field, val)}
            className="form-control--select"
            noResultsText="Nenašli sa žiadne výsledky"
            options={options}
            {...this.props}
            placeholder={placeholderValue}
            id={name}
            clearable={false}
            searchable={searchable}
          />}

        {input.value &&
          !disabled &&
          !withoutClear &&
          <a
            className={styleNames.btnClear}
            onClick={() => this.handleClear(field)}
          >
            <span className={'ico ico--clear ' + styleNames.ico} />
          </a>}

        {input.value &&
          disabled &&
          this.props.onClear &&
          <a
            className={styleNames.btnClear}
            onClick={() => this.handleClear(field)}
          >
            <span className={'ico ico--clear ' + styleNames.ico} />
          </a>}

        <span className={styleNames.icoDropdown}>
          <span className="ico ico--arrow-down " />
          <span className="ico ico--arrow-down " />
        </span>

        {meta.touched &&
          meta.error &&
          <span className="form-control-error">
            <FormattedMessage {...meta.error} />
          </span>}
      </div>
    )
  }

  render() {
    const {
      label,
      labelSmall,
      name,
      wrapperClassName,
      inlineLabel,
    } = this.props

    return (
      <div
        className={cx({
          'form-group': true,
          [wrapperClassName]: wrapperClassName,
          [styles.inlineLabel]: inlineLabel,
        })}
      >
        {label &&
          label.id &&
          <label
            htmlFor={name}
            className={cx({
              'control-label': true,
              [styles.labelSmall]: labelSmall,
            })}
          >
            <FormattedMessage {...label} />
          </label>}
        <Field name={name} {...this.props} component={this.renderField} />
      </div>
    )
  }
}
