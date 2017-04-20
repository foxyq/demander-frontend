'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path, isExternal, _ref) {
  var userType = _ref.userType,
      removeUserType = _ref.removeUserType;

  if (path && path.indexOf('api/') === 0) {
    var apiPath = _config2.default.apiURL + '/' + path.slice(4);
    var prefix = '?';

    if (userType && !removeUserType) {
      if (apiPath.includes('?')) {
        prefix = '&';
      }
      apiPath = '' + apiPath + prefix + 'userType=' + userType;
    }

    !__SERVER__ && console.debug('Calling server...', apiPath.split('?')[0]);
    return apiPath;
  }

  if (isExternal) {
    return path;
  }

  var adjustedPath = path[0] !== '/' ? '/' + path : path;

  switch (adjustedPath) {
    case '/save-user':
      adjustedPath = '/save-user';
      break;
    case '/logout':
      adjustedPath = '/logout';
      break;
    case '/loadAuth':
      adjustedPath = '/loadAuth';
      break;
    case '/authenticate':
      adjustedPath = '/authenticate';
      break;
    default:
      adjustedPath = _config2.default.apiURL + adjustedPath;
      break;
  }

  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return 'http://' + _config2.default.host + ':' + _config2.default.port + adjustedPath;
  }

  if (!__SERVER__) {
    console.debug('Calling server...', adjustedPath.split('?')[0]);
  }
  return adjustedPath;
}

var _ApiClient = function _ApiClient(req) {
  var _this = this;

  (0, _classCallCheck3.default)(this, _ApiClient);

  methods.forEach(function (method) {
    return _this[method] = function (path) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          params = _ref2.params,
          data = _ref2.data,
          external = _ref2.external,
          _ref2$formData = _ref2.formData,
          formData = _ref2$formData === undefined ? false : _ref2$formData,
          textResponse = _ref2.textResponse,
          _ref2$removeUserType = _ref2.removeUserType,
          removeUserType = _ref2$removeUserType === undefined ? false : _ref2$removeUserType;

      return new _promise2.default(function (resolve, reject) {
        var request = _superagent2.default[method](formatUrl(path, external || textResponse, { userType: _this.userType, removeUserType: removeUserType }));

        if (params) {
          request.query(params);
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        if (data && !formData) {
          request.send(data);
        }

        request.end(function (err) {
          var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var responseObject = {};

          if (method === 'get') {
            if (!textResponse) {
              responseObject = res.body;
            } else {
              responseObject = res.text;
            }
          } else {
            responseObject = res.text ? JSON.parse(res.text) : {};
          }

          err ? reject({
            body: responseObject || {},
            headers: res.headers
          } || err) : resolve({ body: responseObject || {}, headers: res.headers });
        });
      });
    };
  });
};

var ApiClient = _ApiClient;

exports.default = ApiClient;
module.exports = exports['default'];