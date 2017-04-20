'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _create = require('./redux/create');

var _create2 = _interopRequireDefault(_create);

var _ApiClient = require('helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Html = require('./helpers/Html');

var _Html2 = _interopRequireDefault(_Html);

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

var _reactRouter = require('react-router');

var _reduxConnect = require('redux-connect');

var _createMemoryHistory = require('react-router/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRedux = require('react-redux');

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pretty = new _prettyError2.default();
var config = require('./config');

// var injectTapEventPlugin = require('react-tap-event-plugin')

// injectTapEventPlugin()

var mainView = function mainView(req, res) {
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }

  var client = new _ApiClient2.default(req);
  var history = (0, _createMemoryHistory2.default)(req.originalUrl);

  var store = (0, _create2.default)(history, client);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' + _server2.default.renderToString(_react2.default.createElement(_Html2.default, { assets: webpackIsomorphicTools.assets(), store: store })));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  (0, _reactRouter.match)({ history: history, routes: (0, _routes2.default)(store), location: req.originalUrl }, function (error, redirectLocation, renderProps) {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      if (!config.isProduction && config.autoLogin) {
        store.getState().auth.user = config.tempUser;
      }
      (0, _reduxConnect.loadOnServer)((0, _extends3.default)({}, renderProps, {
        store: store,
        helpers: { client: client }
      })).then(function () {
        var component = _react2.default.createElement(
          _reactRedux.Provider,
          { store: store, key: 'provider' },
          _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, renderProps)
        );

        res.status(200);

        global.navigator = { userAgent: req.headers['user-agent'] };

        res.send('<!doctype html>\n' + _server2.default.renderToString(_react2.default.createElement(_Html2.default, {
          assets: webpackIsomorphicTools.assets(),
          component: component,
          store: store
        })));
      });
    } else {
      res.status(404).send('Not found');
    }
    return false;
  });
};

exports.default = mainView;
module.exports = exports['default'];