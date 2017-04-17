'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxConnect = require('redux-connect');

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  reduxAsyncConnect: _reduxConnect.reducer,
  app: _app2.default,
  api: _api2.default,
  auth: _auth2.default,
  form: _reduxForm.reducer
});

var rootReducer = function rootReducer(state, action) {
  if (action.type === _app.DOFE_RESET_STATE) {
    state = undefined;
  }

  return appReducer(state, action);
};

exports.default = rootReducer;
module.exports = exports['default'];