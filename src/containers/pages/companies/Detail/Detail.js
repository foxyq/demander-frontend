import React, { Component } from 'react'
import { CompanyForm } from 'containers/forms'

export default class Detail extends Component {
  // static propTypes = {
  //   something: PropTypes.any,
  // }

  render() {
    return <CompanyForm {...this.props} />
  }
}
