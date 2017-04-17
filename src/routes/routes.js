import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth'
import App from '../app'

import * as Pages from 'containers/pages'
import * as Layout from 'containers/layouts'

import Fancy from 'containers/pages/Fancy'

export default store => {
  // const requireLogin = (nextState, replace, cb) => {
  //   function checkAuth() {
  //     const { auth: { user } } = store.getState()

  //     if (!user) {
  //       // oops, not logged in, so can't be here!
  //       replace('/auth/login')
  //     }
  //     cb()
  //   }

  //   if (!isAuthLoaded(store.getState())) {
  //     store.dispatch(loadAuth()).then(checkAuth)
  //   } else {
  //     checkAuth()
  //   }
  // }

  const loadUser = (nextState, replaceState, cb) => {
    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(() => cb())
    } else {
      cb()
    }
  }

  return (
    <Route path="/" onEnter={loadUser} component={App}>
      <Route component={Layout.Public}>
        <IndexRoute component={Pages.Home} />

        <Route path="users">
          <IndexRoute component={Pages.Users.List} />
          <Route path=":id" component={Pages.Users.Detail} />
        </Route>

        <Route path="companies">
          <IndexRoute component={Pages.Companies.List} />
          <Route path=":id" component={Pages.Companies.Detail} />
        </Route>

        <Route path="fancy">
          <IndexRoute component={Fancy} />
        </Route>
      </Route>
    </Route>
  )
}
