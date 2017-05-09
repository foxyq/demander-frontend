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

var _class, _temp;

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  HeaderWebsite: {
    displayName: 'HeaderWebsite'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/components/layout/headers/Website/HeaderWebsite.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

// import { connect } from 'react-redux'

var HeaderWebsite = _wrapComponent('HeaderWebsite')((_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(HeaderWebsite, _React$Component);

  function HeaderWebsite() {
    (0, _classCallCheck3.default)(this, HeaderWebsite);
    return (0, _possibleConstructorReturn3.default)(this, (HeaderWebsite.__proto__ || Object.getPrototypeOf(HeaderWebsite)).apply(this, arguments));
  }

  (0, _createClass3.default)(HeaderWebsite, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'nav',
        { className: 'navbar navbar-fixed-top navbar-color-on-scroll navbar-transparent' },
        _react3.default.createElement(
          'div',
          { className: 'container' },
          _react3.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react3.default.createElement(
              'button',
              {
                type: 'button',
                className: 'navbar-toggle',
                'data-toggle': 'collapse',
                'data-target': '#navigation-index'
              },
              _react3.default.createElement(
                'span',
                { className: 'sr-only' },
                'Navigace'
              ),
              _react3.default.createElement('span', { className: 'icon-bar' }),
              _react3.default.createElement('span', { className: 'icon-bar' }),
              _react3.default.createElement('span', { className: 'icon-bar' })
            ),
            this.props.logo
          ),
          _react3.default.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'navigation-index' },
            _react3.default.createElement(
              'ul',
              { className: 'nav navbar-nav navbar-left' },
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  _reactRouter.IndexLink,
                  { to: '/', activeClassName: 'active' },
                  'Dom\u016F'
                )
              ),
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  _reactRouter.Link,
                  { to: '/demands', activeClassName: 'active' },
                  'Popt\xE1vky'
                )
              ),
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  _reactRouter.Link,
                  { to: '/services', activeClassName: 'active' },
                  'Slu\u017Eby'
                )
              ),
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  _reactRouter.Link,
                  { to: '/companies', activeClassName: 'active' },
                  'Dodavatel\xE9'
                )
              ),
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  _reactRouter.Link,
                  { to: '/howitworks', activeClassName: 'active' },
                  'Jak to funguje?'
                )
              ),
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  _reactRouter.Link,
                  { to: '/contact', activeClassName: 'active' },
                  'Kontakt'
                )
              )
            ),
            _react3.default.createElement(
              'ul',
              { className: 'nav navbar-nav navbar-right' },
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  'a',
                  {
                    rel: 'tooltip',
                    title: '',
                    'data-placement': 'bottom',
                    href: '#',
                    target: '_blank',
                    className: 'btn btn-white btn-simple btn-just-icon',
                    'data-original-title': 'Follow us on Twitter'
                  },
                  _react3.default.createElement('i', { className: 'fa fa-twitter' })
                )
              ),
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  'a',
                  {
                    rel: 'tooltip',
                    title: '',
                    'data-placement': 'bottom',
                    href: '#',
                    target: '_blank',
                    className: 'btn btn-white btn-simple btn-just-icon',
                    'data-original-title': 'Like us on Facebook'
                  },
                  _react3.default.createElement('i', { className: 'fa fa-facebook-square' })
                )
              ),
              _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                  'a',
                  {
                    rel: 'tooltip',
                    title: '',
                    'data-placement': 'bottom',
                    href: '#',
                    target: '_blank',
                    className: 'btn btn-white btn-simple btn-just-icon',
                    'data-original-title': 'Follow us on Instagram'
                  },
                  _react3.default.createElement('i', { className: 'fa fa-instagram' })
                )
              )
            )
          )
        )
      );
    }
  }]);
  return HeaderWebsite;
}(_react3.default.Component), _class.PropTypes = {
  logo: _react3.default.PropTypes.object
}, _temp));

exports.default = HeaderWebsite;
module.exports = exports['default'];