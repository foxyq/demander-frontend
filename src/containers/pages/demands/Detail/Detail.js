import React, { Component } from 'react'
import { DemandForm } from 'containers/forms'

export default class Detail extends Component {
  // static propTypes = {
  //   something: PropTypes.any,
  // }

  render() {
    return <DemandForm {...this.props} />
  }
}
