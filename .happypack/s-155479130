'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _create = require('./redux/create');

var _create2 = _interopRequireDefault(_create);

var _ApiClient = require('helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _reduxConnect = require('redux-connect');

var _reactRouterScroll = require('react-router-scroll');

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _ApiClient2.default();
var dest = document.getElementById('content');
var store = (0, _create2.default)(_reactRouter.browserHistory, client, window.__data);
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

var component = _react2.default.createElement(
  _reactRouter.Router,
  {
    render: function render(props) {
      return _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, (0, _extends3.default)({}, props, {
        helpers: { client: client },
        filter: function filter(item) {
          return !item.deferred;
        },
        render: (0, _reactRouter.applyRouterMiddleware)((0, _reactRouterScroll.useScroll)())
      }));
    },
    history: history
  },
  (0, _routes2.default)(store)
);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store, key: 'provider' },
  component
), dest);

if (process.env.NODE_ENV !== 'production') {
  var Perf = require('react-addons-perf');

  window.React = _react2.default;
  window.Perf = Perf;

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  var DevTools = require('./redux/DevTools');

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store, key: 'provider' },
    _react2.default.createElement(
      'div',
      null,
      component,
      _react2.default.createElement(DevTools, null)
    )
  ), dest);
}