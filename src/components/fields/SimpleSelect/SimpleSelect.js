import React, { Component } from 'react'
import { Field } from 'redux-form'
// 3t
// import Select from 'react-select'
// import './input.styl'

export default class SimpleSelect extends Component {
  static propTypes = {
    // label: React.PropTypes.string,
    value: React.PropTypes.string,
    // options: React.PropTypes.array,
    // onInputChange: React.PropTypes.func,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    // type: React.PropTypes.string,
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

  // handleChange = (e, field) => {
  //   if (this.props.onInputChange) {
  //     this.props.onInputChange(e.target.value)
  //   }
  //   field.input.onChange(e.target.value)
  // };

  renderField = () => {
    // const { type } = this.props
    // const { meta, input } = field
    const { options } = this.props

    console.log(options)

    return (
      // <div>
      //   <input
      //     className="form-control"
      //     {...input}
      //     type={type || 'text'}
      //     onChange={e => this.handleChange(e, field)}
      //   />
      //
      // </div>

      (
        <div>
          <select>
            {/* <option />
            <option value="xxx" selected="selected">
              field
            </option>
            <option value="58f7f61cff8d4014d7f7730b">
              Vodafone Czech Republic a.s.
            </option>
            <option value="5911c29ef00fa31957f86d9c">CUBYSOFT sro 2</option>
            <option value="58f7f60fff8d4014d7f7730a">
              CGI IT Czech Republic s.r.o.
            </option> */}
            {options.map(option => {
              return (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              )
            })}
          </select>
        </div>
      )
    )
  }

  render() {
    const { label, name } = this.props

    return (
      <div className="form-group">
        <label htmlFor={name} className="control-label">{label}</label>
        <Field id={name} name={name} component={this.renderField} value="xxx" />
      </div>
    )
  }

  // render() {
  //   const { label, options } = this.props
  //
  //
  //   return (
  //     <div className="section">
  //       <h4 className="section-heading">{label}</h4>
  //       <Select
  //         name="form-field-name"
  //         value={this.state.value}
  //         options={options}
  //         onChange={this.handleChange}
  //       />
  //       {/*
  //       <select>
  //         <option value="volvo">Volvo</option>
  //       </select> */}
  //       {/* <select>
  //         {options.map(option => (
  //           <option key={option._id} value={option._id}>
  //             {option.company_name}
  //           </option>
  //         ))}
  //       </select> */}
  //       <div className="hint">This example uses simple boolean values</div>
  //     </div>
  //   )
  // }
}
