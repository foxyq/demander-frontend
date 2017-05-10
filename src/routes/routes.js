import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth'

import App from '../app'
import * as Pages from 'containers/pages'
import * as Layout from 'containers/layouts'

import Fancy from '../containers/pages/Fancy'

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
      {/* HOMEPAGE */}
      <Route component={Layout.Home}>
        <IndexRoute component={Pages.Home} />
      </Route>

      {/* COMPANIES */}
      <Route path="companies">
        {/* COMPANIES STANDARD */}
        <Route component={Layout.Standard}>
          <IndexRoute component={Pages.Companies.List} />
          <Route path=":id" component={Pages.Companies.Form} />
        </Route>
      </Route>

      {/* COMPANY PROFILE */}
      <Route path="company" component={Layout.Company}>
        {/* <IndexRoute component={Pages.Companies.List} /> */}
        <Route path=":id" component={Pages.Companies.Detail} />
      </Route>

      {/* DEMAND DETAIL */}
      {/* <Route path="demand" component={Layout.Company}>
        {/* <IndexRoute component={Pages.Companies.List} /> */}
      {/* <Route path=":id" component={Pages.Companies.Detail} />
      </Route> */}

      {/*  STANDARD LAYOUT */}
      <Route component={Layout.Standard}>
        <Route path="users">
          <IndexRoute component={Pages.Users.List} />
          <Route path=":id" component={Pages.Users.Detail} />
        </Route>

        <Route path="demands">
          <IndexRoute component={Pages.Demands.List} />
          <Route path=":id" component={Pages.Demands.Form} />
        </Route>

        <Route path="demand">
          {/* <IndexRoute component={Pages.Companies.List} /> */}
          <Route path=":id" component={Pages.Demands.Detail} />
        </Route>

        <Route path="services">
          <IndexRoute component={Pages.Services.List} />
          <Route path=":id" component={Pages.Services.Detail} />
        </Route>

        <Route path="howitworks">
          <IndexRoute component={Pages.HowItWorks} />
        </Route>

        <Route path="contact">
          <IndexRoute component={Pages.Kontakt} />
        </Route>

        <Route path="fancy">
          <IndexRoute component={Fancy} />
        </Route>

      </Route>

    </Route>
  )
}
