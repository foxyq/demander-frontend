'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOFE_RESET_STATE = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = reducer;
exports.notification = notification;
exports.changeLocale = changeLocale;
exports.modal = modal;
exports.resetState = resetState;
exports.updateAccordion = updateAccordion;
exports.setPage = setPage;

var _store = require('store');

var _store2 = _interopRequireDefault(_store);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTIFICATION = 'react-template/app/NOTIFICATION';
var CHANGE_LOCALE = 'react-template/app/CHANGE_LOCALE';
var TOGGLE_MODAL = 'react-template/app/TOGGLE_MODAL';
var UPDATE_ACCORDION = 'react-template/app/UPDATE_ACCORDION';
var SET_PAGE = 'react-template/app/SET_PAGE';

var DOFE_RESET_STATE = exports.DOFE_RESET_STATE = 'react-template/app/DOFE_RESET_STATE';

var initialState = {
  notification: {
    message: '',
    level: '',
    options: {},
    active: false
  },
  locale: {
    id: 1,
    lang: _store2.default.get('locale') ? _store2.default.get('locale') : 'en',
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
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {

    case NOTIFICATION:
      return (0, _assign2.default)({}, state, {
        notification: {
          message: action.message,
          level: typeof action.options === 'string' ? action.options : 'info',
          options: (0, _typeof3.default)(action.options) === 'object' ? action.options : {},
          active: action.active === undefined
        }
      });
    case CHANGE_LOCALE:
      _store2.default.set('locale', action.locale);
      return (0, _assign2.default)({}, state, {
        locale: {
          lang: action.locale,
          willUpdate: true
        }
      });
    case TOGGLE_MODAL:
      return (0, _assign2.default)({}, state, {
        modal: {
          id: action.id,
          next: action.next
        }
      });
    case UPDATE_ACCORDION:
      return (0, _assign2.default)({}, state, {
        misc: {
          updateAccordion: _uuid2.default.v1()
        }
      });
    case SET_PAGE:
      return (0, _extends3.default)({}, state, {
        page: {
          title: action.title,
          breadcrumbs: action.breadcrumbs
        }
      });
    default:
      return state;
  }
}

function notification(message, options, active) {
  return {
    type: NOTIFICATION,
    message: message,
    options: options,
    active: active
  };
}

function changeLocale(locale) {
  return {
    type: CHANGE_LOCALE,
    locale: locale
  };
}

function modal(id, next) {
  return {
    type: TOGGLE_MODAL,
    id: id,
    next: next
  };
}

function resetState() {
  return {
    type: DOFE_RESET_STATE
  };
}

function updateAccordion() {
  return {
    type: UPDATE_ACCORDION
  };
}

function setPage(title, breadcrumbs) {
  return {
    type: SET_PAGE,
    title: title,
    breadcrumbs: breadcrumbs
  };
}