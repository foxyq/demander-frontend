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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _Logo = require('./Logo.styl');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Logo: {
    displayName: 'Logo'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/components/layout/headers/Logo/Logo.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Logo = _wrapComponent('Logo')(function (_React$Component) {
  (0, _inherits3.default)(Logo, _React$Component);

  function Logo() {
    (0, _classCallCheck3.default)(this, Logo);
    return (0, _possibleConstructorReturn3.default)(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  (0, _createClass3.default)(Logo, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'a',
        { href: '#' },
        _react3.default.createElement(
          'div',
          { className: 'logo-container' },
          _react3.default.createElement(
            'div',
            { className: 'logo' },
            _react3.default.createElement('img', {
              src: require('assets/img/logo.png'),
              className: _Logo2.default.logo,
              height: '45',
              alt: 'Demander.cz logo',
              rel: 'tooltip',
              title: '',
              'data-placement': 'bottom',
              'data-html': 'true',
              'data-original-title': '<b>Demander.cz</b> revoluce v syst\xE9mu obchodov\xE1n\xED'
            })
          )
        )
      );
    }
  }]);
  return Logo;
}(_react3.default.Component));

exports.default = Logo;
module.exports = exports['default'];