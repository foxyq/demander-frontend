import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getUsers, deleteUser } from 'redux/modules/api/users'

@connect(
  ({ api }) => ({
    users: api.users.getUsers.data,
  }),
  { getUsers, deleteUser },
)
export default class List extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    users: PropTypes.array,
  }

  componentDidMount() {
    this.props.getUsers()
  }

  handleDeleteUser = userId => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      this.props.deleteUser(userId).then(() => {
        this.props.getUsers()
      })
    }
  }

  render() {
    const { users } = this.props

    return (
      <div>
        {users &&
          users.length > 0 &&
          users.map(user => (
            <div>
              {`id: ${user._id}, name: ${user.name}`}

              <Link to={`/users/${user._id}`}>Edit</Link>

              <button
                type="button"
                onClick={() => this.handleDeleteUser(user._id)}
              >
                Delete
              </button>
            </div>
          ))}
        <Link to="/users/new">Create user</Link>
      </div>
    )
  }
}
