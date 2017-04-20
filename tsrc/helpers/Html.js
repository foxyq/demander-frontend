'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp;

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Html: {
    displayName: 'Html'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/helpers/Html.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Html = _wrapComponent('Html')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(Html, _Component);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
  }

  (0, _createClass3.default)(Html, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          assets = _props.assets,
          component = _props.component,
          store = _props.store;

      var content = component ? _server2.default.renderToString(component) : '';
      var head = _reactHelmet2.default.rewind();

      return _react3.default.createElement(
        'html',
        { lang: 'en-us' },
        _react3.default.createElement(
          'head',
          null,
          head.base.toComponent(),
          head.title.toComponent(),
          head.meta.toComponent(),
          head.link.toComponent(),
          head.script.toComponent(),
          _react3.default.createElement('link', { rel: 'shortcut icon', href: '/favicon.ico' }),
          _react3.default.createElement('link', {
            href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
            rel: 'stylesheet',
            integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u',
            crossOrigin: 'anonymous'
          }),
          _react3.default.createElement('link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
          }),
          _react3.default.createElement('link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
          }),
          _react3.default.createElement('link', {
            rel: 'stylesheet',
            href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'
          }),
          _react3.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/dist/iconfont.css' }),
          (0, _keys2.default)(assets.styles).map(function (style, key) {
            return _react3.default.createElement('link', {
              href: assets.styles[style],
              key: key,
              media: 'screen, projection',
              rel: 'stylesheet',
              type: 'text/css',
              charSet: 'UTF-8'
            });
          }),
          _react3.default.createElement('link', {
            href: '/dist/main-styles-less.css',
            media: 'screen, projection',
            rel: 'stylesheet',
            type: 'text/css',
            charSet: 'UTF-8'
          })
        ),
        _react3.default.createElement(
          'body',
          null,
          _react3.default.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: content } }),
          _react3.default.createElement('script', {
            dangerouslySetInnerHTML: {
              __html: 'window.__data=' + (0, _serializeJavascript2.default)(store.getState()) + ';'
            },
            charSet: 'UTF-8'
          }),
          _react3.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }),
          _react3.default.createElement('script', { src: assets.javascript.vendor, charSet: 'UTF-8' }),
          __DEVELOPMENT__ && [_react3.default.createElement('script', {
            key: 'dlls__vendor',
            src: '/dist/dlls/dll__vendor.js',
            charSet: 'UTF-8'
          })],
          _react3.default.createElement('script', { src: assets.javascript.main, charSet: 'UTF-8' })
        )
      );
    }
  }]);
  return Html;
}(_react2.Component), _class.propTypes = {
  assets: _react2.PropTypes.object,
  component: _react2.PropTypes.node,
  store: _react2.PropTypes.object
}, _temp));

exports.default = Html;
module.exports = exports['default'];