import React, { Component } from 'react'
import { DemandForm } from 'containers/forms'

export default class Detail extends Component {
  render() {
    return <DemandForm {...this.props} />
  }
}
