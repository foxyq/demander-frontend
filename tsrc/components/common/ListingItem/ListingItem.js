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

var _reactIntl = require('react-intl');

var _ListingItem = require('./ListingItem.styl');

var _ListingItem2 = _interopRequireDefault(_ListingItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  ListingItem: {
    displayName: 'ListingItem'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/components/common/ListingItem/ListingItem.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var ListingItem = _wrapComponent('ListingItem')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(ListingItem, _Component);

  function ListingItem() {
    (0, _classCallCheck3.default)(this, ListingItem);
    return (0, _possibleConstructorReturn3.default)(this, (ListingItem.__proto__ || Object.getPrototypeOf(ListingItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListingItem, [{
    key: 'deleteClick',
    value: function deleteClick(id) {
      this.props.onDelete(id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          item = _props.item,
          controller = _props.controller,
          isAdmin = _props.isAdmin;


      return _react3.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-4' },
        _react3.default.createElement(
          'div',
          { className: 'card card-blog' },
          _react3.default.createElement(
            'div',
            { className: 'card-content' },
            _react3.default.createElement(
              'h6',
              { className: 'category text-success' },
              item._id
            ),
            _react3.default.createElement(
              'h4',
              { className: _ListingItem2.default.heading + ' card-title' },
              _react3.default.createElement(
                'a',
                { href: '#pablo' },
                item.title
              )
            ),
            _react3.default.createElement(
              'p',
              { className: 'card-description' },
              item.goal
            ),
            _react3.default.createElement('br', null),
            isAdmin && _react3.default.createElement(
              'span',
              null,
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/' + controller + '/' + item._id },
                'Upravi\u0165'
              ),
              _react3.default.createElement(
                'button',
                {
                  type: 'button',
                  onClick: function onClick() {
                    return _this2.deleteClick(item._id);
                  }
                },
                'Delete'
              )
            ),
            _react3.default.createElement(
              'div',
              { className: 'footer' },
              _react3.default.createElement(
                'div',
                { className: 'author' },
                _react3.default.createElement(
                  'a',
                  { href: '#pablo' },
                  _react3.default.createElement('img', {
                    src: 'http://demander.cz/images/live/logo-csob.png',
                    alt: '...',
                    className: 'avatar img-raised'
                  }),
                  _react3.default.createElement(
                    'span',
                    null,
                    'CSOB'
                  )
                )
              ),
              _react3.default.createElement(
                'div',
                { className: 'stats' },
                _react3.default.createElement(
                  'i',
                  { className: 'material-icons' },
                  'schedule '
                ),
                _react3.default.createElement(_reactIntl.FormattedRelative, { value: item.created_date })
              )
            )
          )
        )
      );
    }
  }]);
  return ListingItem;
}(_react2.Component), _class.propTypes = {
  item: _react2.PropTypes.object.isRequired,
  controller: _react2.PropTypes.string.isRequired,
  onDelete: _react2.PropTypes.func,
  isAdmin: _react2.PropTypes.bool.isRequired
}, _temp));

exports.default = ListingItem;
module.exports = exports['default'];