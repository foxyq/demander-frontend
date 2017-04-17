'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _auth = require('redux/modules/auth');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _pages = require('containers/pages');

var Pages = _interopRequireWildcard(_pages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
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

  var loadUser = function loadUser(nextState, replaceState, cb) {
    if (!(0, _auth.isLoaded)(store.getState())) {
      store.dispatch((0, _auth.load)()).then(function () {
        return cb();
      });
    } else {
      cb();
    }
  };

  return _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', onEnter: loadUser, component: _app2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: Pages.Home }),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: 'users' },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: Pages.Users.List }),
      _react2.default.createElement(_reactRouter.Route, { path: ':id', component: Pages.Users.Detail })
    ),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: 'companies' },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: Pages.Companies.List }),
      _react2.default.createElement(_reactRouter.Route, { path: ':id', component: Pages.Companies.Detail })
    )
  );
};

module.exports = exports['default'];