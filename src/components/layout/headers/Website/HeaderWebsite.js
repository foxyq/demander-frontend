import React from 'react'
import { Link, IndexLink } from 'react-router'
// import { connect } from 'react-redux'

export default class HeaderWebsite extends React.Component {
  render() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {' | '}
        <Link to="/companies" activeClassName="active">Companies</Link>
        {' | '}
        <Link to="/users" activeClassName="active">Users</Link>
        {' | '}
        <Link to="/fancy" activeClassName="active">Test page</Link>

      </nav>
    )
  }
}
