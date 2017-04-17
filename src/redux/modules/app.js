import store from 'store'
import uuid from 'uuid'

const NOTIFICATION = 'react-template/app/NOTIFICATION'
const CHANGE_LOCALE = 'react-template/app/CHANGE_LOCALE'
const TOGGLE_MODAL = 'react-template/app/TOGGLE_MODAL'
const UPDATE_ACCORDION = 'react-template/app/UPDATE_ACCORDION'
const SET_PAGE = 'react-template/app/SET_PAGE'

export const DOFE_RESET_STATE = 'react-template/app/DOFE_RESET_STATE'

const initialState = {
  notification: {
    message: '',
    level: '',
    options: {},
    active: false
  },
  locale: {
    id: 1,
    lang: store.get('locale') ? store.get('locale') : 'en',
    willUpdate: false
  },
  page: {
    title: '',
    breadcrumbs: false
  },
  modal: {
    id: null,
    next: null
  },
  misc: {
    updateAccordion: null
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case NOTIFICATION:
      return Object.assign({}, state, {
        notification: {
          message: action.message,
          level: (typeof action.options === 'string') ? action.options : 'info',
          options: (typeof action.options === 'object') ? action.options : {},
          active: action.active === undefined
        }
      })
    case CHANGE_LOCALE:
      store.set('locale', action.locale)
      return Object.assign({}, state, {
        locale: {
          lang: action.locale,
          willUpdate: true
        }
      })
    case TOGGLE_MODAL:
      return Object.assign({}, state, {
        modal: {
          id: action.id,
          next: action.next
        }
      })
    case UPDATE_ACCORDION:
      return Object.assign({}, state, {
        misc: {
          updateAccordion: uuid.v1()
        }
      })
    case SET_PAGE:
      return {
        ...state,
        page: {
          title: action.title,
          breadcrumbs: action.breadcrumbs
        }
      }
    default:
      return state
  }
}

export function notification(message, options, active) {
  return {
    type: NOTIFICATION,
    message,
    options,
    active
  }
}

export function changeLocale(locale) {
  return {
    type: CHANGE_LOCALE,
    locale
  }
}

export function modal(id, next) {
  return {
    type: TOGGLE_MODAL,
    id,
    next
  }
}

export function resetState() {
  return {
    type: DOFE_RESET_STATE
  }
}

export function updateAccordion() {
  return {
    type: UPDATE_ACCORDION
  }
}

export function setPage(title, breadcrumbs) {
  return {
    type: SET_PAGE,
    title,
    breadcrumbs
  }
}

