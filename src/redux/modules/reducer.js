import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'

import auth from './auth'
import api from './api'
import app, { DOFE_RESET_STATE } from './app'
import { reducer as form } from 'redux-form'

const appReducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  app,
  api,
  auth,
  form
})

const rootReducer = (state, action) => {
  if (action.type === DOFE_RESET_STATE) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
