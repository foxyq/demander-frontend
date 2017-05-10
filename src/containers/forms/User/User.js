import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { schema } from 'models/user'

import { Input } from 'components/fields'

import {
  getUsers,
  createUser,
  getUser,
  editUser,
} from 'redux/modules/api/users'

import validate from './user.validation'

@connect(
  ({ api }, { params }) => ({
    isSubmitting: api.users.createUser.isSubmitting,
    initialValues: params.id !== 'new' && api.users.getUser.data,
  }),
  { createUser, getUsers, getUser, editUser },
)
@reduxForm({
  form: 'User',
  enableReinitialize: true,
  validate,
})
export default class User extends Component {
  static propTypes = {
    // This is from redux form
    handleSubmit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    getUsers: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
  }

  state = {
    error: null,
  }

  componentDidMount() {
    const userId = this.props.params.id
    const isEditing = userId !== 'new'

    if (isEditing) {
      this.props.getUser(userId)
    }
  }

  // This is the actual submit method called on successful form submit
  handleSubmit = model => {
    const userId = this.props.params.id
    const isEditing = userId !== 'new'

    const action = isEditing ? this.props.editUser : this.props.createUser
    const values = schema(model)

    action(values, userId).then(this.handleSuccess).catch(this.handleError)
  }

  handleSuccess = () => {
    this.props.getUsers()

    browserHistory.push('/users')
  }

  handleError = error => this.setState({ error })

  render() {
    const { handleSubmit, isSubmitting } = this.props
    const { error } = this.state

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Input label="name" name="name" />
        <Input label="email" name="email" />
        <Input label="password" name="password" />

        <input
          type="submit"
          className="btn btn-lg btn-success"
          value="Přidat"
        />

        {isSubmitting && <div>Submitting...</div>}

        {error && <div>{error}</div>}
      </form>
    )
  }
}
