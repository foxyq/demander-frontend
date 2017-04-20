import React, { Component } from 'react'
import { CompanyForm } from 'containers/forms'

export default class Form extends Component {
  // static propTypes = {
  //   something: PropTypes.any,
  // }

  render() {
    return <CompanyForm {...this.props} />
  }
}
