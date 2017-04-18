import React, { Component } from 'react'
import { ServiceForm } from 'containers/forms'

export default class Detail extends Component {
  // static propTypes = {
  //   something: PropTypes.any,
  // }

  render() {
    console.log('Service detail')
    return <ServiceForm {...this.props} />
  }
}
