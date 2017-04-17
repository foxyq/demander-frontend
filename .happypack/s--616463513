'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _redux = require('redux');

var _clientMiddleware = require('./middleware/clientMiddleware');

var _clientMiddleware2 = _interopRequireDefault(_clientMiddleware);

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(history, client, data) {
  var reduxRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(history);
  var middleware = [(0, _clientMiddleware2.default)(client), reduxRouterMiddleware];
  var finalCreateStore = void 0;

  if (__CLIENT__ && __DEVELOPMENT__ && __DEVTOOLS__) {
    var _require = require('redux-devtools'),
        persistState = _require.persistState;

    var DevTools = require('./DevTools');

    finalCreateStore = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(_redux.createStore);
  } else {
    finalCreateStore = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);
  }

  var reducer = require('./modules/reducer');
  var store = finalCreateStore(reducer, data);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', function () {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}
module.exports = exports['default'];