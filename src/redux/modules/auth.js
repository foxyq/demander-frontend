import jwtDecode from 'jwt-decode'
import store from 'store'

const config = require('../../config')
const LOAD = 'dofe-web/auth/LOAD'
const LOAD_SUCCESS = 'dofe-web/auth/LOAD_SUCCESS'
const LOAD_FAIL = 'dofe-web/auth/LOAD_FAIL'
const LOGIN = 'dofe-web/auth/LOGIN'
const LOGIN_SUCCESS = 'dofe-web/auth/LOGIN_SUCCESS'
const LOGIN_FAIL = 'dofe-web/auth/LOGIN_FAIL'
const LOGOUT = 'dofe-web/auth/LOGOUT'
const LOGOUT_SUCCESS = 'dofe-web/auth/LOGOUT_SUCCESS'
const LOGOUT_FAIL = 'dofe-web/auth/LOGOUT_FAIL'
const SAVE_USER = 'dofe-web/auth/SAVE_USER'
const SAVE_USER_SUCCESS = 'dofe-web/auth/SAVE_USER_SUCCESS'
const SAVE_USER_FAIL = 'dofe-web/auth/SAVE_USER_FAIL'
const SET_ORGANIZATION = 'dofe-web/auth/SET_ORGANIZATION'

const initialState = {
  loaded: false
}

export default function reducer(state = initialState, action = {}) {
  let tempUser

  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      }
    case LOAD_SUCCESS:
      tempUser = config.autoLogin ? state.user : null

      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result ? action.result : tempUser
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      }
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error
      }
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null
      }
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      }
    case SAVE_USER:
      return {
        ...state
      }
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        user: action.result
      }
    case SAVE_USER_FAIL:
      return {
        ...state
      }
    case SET_ORGANIZATION:
      store.set('organizationId', action.id)

      return {
        ...state,
        organization: {
          id: action.id
        }
      }

    default:
      return state
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/loadAuth')
  }
}

/* eslint-disable */
export function login(data) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: client => client.post('/authenticate', {
      data: {
        ...data,
        client_id: 'backoffice-web',
      }
    })
  }
}
/* eslint-enable */

export function saveUser(response) {
  return {
    types: [SAVE_USER, SAVE_USER_SUCCESS, SAVE_USER_FAIL],
    promise: client => client.post('/save-user', {
      data: {
        ...response,
        ...jwtDecode(response.access_token)
      }
    })
  }
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: client => client.post('/logout')
  }
}


export function setOrganization(id) {
  return {
    type: SET_ORGANIZATION,
    id
  }
}


