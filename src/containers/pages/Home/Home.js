import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { Button } from 'antd'
import 'antd/dist/antd.less'

import { getUsers } from 'redux/modules/api/users'

// import { UserForm } from 'containers/forms'

// const stateToProps = state => ({
//   users: state.api.users.getUsers.data
// })
//
// const stateToProps = state => {
//   return {
//     users: state.api.users.getUsers.data
//   }
// }
//
// const dispatchToProps = {
//   getUsers
// }
//
// export default connect(stateToProps, dispatchToProps)(Home)

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
    // getUsers: PropTypes.func.isRequired,
    users: PropTypes.array,
  }

  componentDidMount() {
    // this.props.getUsers()
  }

  render() {
    // const { users } = this.props

    return (
      <div>
        Home
        <ul>
          <li>
            <Link to="/users">
              <Button type="primary">
                Users
              </Button>
            </Link>

            <Link to="/companies">
              <Button type="primary">
                Companies
              </Button>
            </Link>

            <Link to="/fancy">
              <Button type="primary">
                Fancy page
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
