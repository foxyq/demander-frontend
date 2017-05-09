import React, { Component } from 'react'
import Select from 'react-select'

export default class SimpleSelect extends Component {
  static propTypes = {
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    options: React.PropTypes.array,
  }

  constructor(props) {
    super(props)
    // this.state = { label: this.props.label }
    // this.state = { options: this.props.options }
    this.state = { value: this.props.value }
    // this.state = { value: false }
    this.handleChange = this.handleChange.bind(this)
  }

  // getInitialState() {
  //   return {
  //     options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }],
  //     value: null,
  //   }
  // }

  // onChange(value) => {
  //   console.log(value.value)
  //   this.setState({
  //     value: value.value,
  //   })
  // }

  handleChange(event) {
    this.setState({ value: event.value })
  }
  render() {
    const { label, options } = this.props

    return (
      <div className="section">
        <h4 className="section-heading">{label}</h4>
        <Select
          name="form-field-name"
          value={this.state.value}
          options={options}
          onChange={this.handleChange}
        />
        {/*
        <select>
          <option value="volvo">Volvo</option>
        </select> */}
        {/* <select>
          {options.map(option => (
            <option key={option._id} value={option._id}>
              {option.company_name}
            </option>
          ))}
        </select> */}
        <div className="hint">This example uses simple boolean values</div>
      </div>
    )
  }
}
