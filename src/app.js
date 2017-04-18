import React, { Component, PropTypes } from 'react'
import { asyncConnect } from 'redux-connect'
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth'

@asyncConnect([
  {
    promise: ({ store: { dispatch, getState } }) => {
      const promises = []

      if (!isAuthLoaded(getState())) {
        promises.push(dispatch(loadAuth()))
      }

      return Promise.all(promises)
    },
  },
])
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <div>
        {/* <div className="row"> */}
        {/* <div className="container"> */}
        {children}
        {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
}
