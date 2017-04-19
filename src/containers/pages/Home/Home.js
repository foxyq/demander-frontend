import React, { Component, PropTypes } from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'
import 'antd/dist/antd.less'

import { getUsers } from 'redux/modules/api/users'

@connect(
  ({ api, auth }) => ({
    users: get(api, 'users.getUsers.data'),
    token: get(auth, 'user.token'),
  }),
  {
    getUsers,
  },
)
export default class Home extends Component {
  static propTypes = {
    users: PropTypes.array,
  }

  render() {
    return (
      <div>
        HomePage content
      </div>
    )
  }
}
