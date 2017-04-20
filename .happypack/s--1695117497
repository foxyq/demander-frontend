'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;
exports.isLoaded = isLoaded;
exports.load = load;
exports.login = login;
exports.saveUser = saveUser;
exports.logout = logout;
exports.setOrganization = setOrganization;

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _store = require('store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('../../config');
var LOAD = 'dofe-web/auth/LOAD';
var LOAD_SUCCESS = 'dofe-web/auth/LOAD_SUCCESS';
var LOAD_FAIL = 'dofe-web/auth/LOAD_FAIL';
var LOGIN = 'dofe-web/auth/LOGIN';
var LOGIN_SUCCESS = 'dofe-web/auth/LOGIN_SUCCESS';
var LOGIN_FAIL = 'dofe-web/auth/LOGIN_FAIL';
var LOGOUT = 'dofe-web/auth/LOGOUT';
var LOGOUT_SUCCESS = 'dofe-web/auth/LOGOUT_SUCCESS';
var LOGOUT_FAIL = 'dofe-web/auth/LOGOUT_FAIL';
var SAVE_USER = 'dofe-web/auth/SAVE_USER';
var SAVE_USER_SUCCESS = 'dofe-web/auth/SAVE_USER_SUCCESS';
var SAVE_USER_FAIL = 'dofe-web/auth/SAVE_USER_FAIL';
var SET_ORGANIZATION = 'dofe-web/auth/SET_ORGANIZATION';

var initialState = {
  loaded: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var tempUser = void 0;

  switch (action.type) {
    case LOAD:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case LOAD_SUCCESS:
      tempUser = config.autoLogin ? state.user : null;

      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        user: action.result ? action.result : tempUser
      });
    case LOAD_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.error
      });
    case LOGIN:
      return (0, _extends3.default)({}, state, {
        loggingIn: true
      });
    case LOGIN_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loggingIn: false,
        user: action.result
      });
    case LOGIN_FAIL:
      return (0, _extends3.default)({}, state, {
        loggingIn: false,
        user: null,
        loginError: action.error
      });
    case LOGOUT:
      return (0, _extends3.default)({}, state, {
        loggingOut: true
      });
    case LOGOUT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loggingOut: false,
        user: null
      });
    case LOGOUT_FAIL:
      return (0, _extends3.default)({}, state, {
        loggingOut: false,
        logoutError: action.error
      });
    case SAVE_USER:
      return (0, _extends3.default)({}, state);
    case SAVE_USER_SUCCESS:
      return (0, _extends3.default)({}, state, {
        user: action.result
      });
    case SAVE_USER_FAIL:
      return (0, _extends3.default)({}, state);
    case SET_ORGANIZATION:
      _store2.default.set('organizationId', action.id);

      return (0, _extends3.default)({}, state, {
        organization: {
          id: action.id
        }
      });

    default:
      return state;
  }
}

function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/loadAuth');
    }
  };
}

/* eslint-disable */
function login(data) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: function promise(client) {
      return client.post('/authenticate', {
        data: (0, _extends3.default)({}, data, {
          client_id: 'backoffice-web'
        })
      });
    }
  };
}
/* eslint-enable */

function saveUser(response) {
  return {
    types: [SAVE_USER, SAVE_USER_SUCCESS, SAVE_USER_FAIL],
    promise: function promise(client) {
      return client.post('/save-user', {
        data: (0, _extends3.default)({}, response, (0, _jwtDecode2.default)(response.access_token))
      });
    }
  };
}

function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: function promise(client) {
      return client.post('/logout');
    }
  };
}

function setOrganization(id) {
  return {
    type: SET_ORGANIZATION,
    id: id
  };
}