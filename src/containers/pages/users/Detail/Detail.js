import React, { Component } from 'react'

import { UserForm } from 'containers/forms'

export default class Detail extends Component {
  // static propTypes = {
  // something: PropTypes.any
  // }

  render() {
    return <UserForm {...this.props} />
  }
}
