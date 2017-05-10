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

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Gallery: {
    displayName: 'Gallery'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/components/pages/Company/Gallery/Gallery.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Gallery = _wrapComponent('Gallery')(function (_React$Component) {
  (0, _inherits3.default)(Gallery, _React$Component);

  function Gallery() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Gallery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      lightboxIsOpen: true
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Gallery, [{
    key: 'closeLightbox',
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var LIGHTBOX_IMAGE_SET = [{
        src: 'http://www.planwallpaper.com/static/images/bicycle-1280x720.jpg',
        caption: 'Sydney, Australia - Photo by Jill Smith'
      }, {
        src: 'https://www.qdtricks.net/wp-content/uploads/2016/05/hd-road-wallpaper.jpg'
      }, {
        src: 'http://www.uniwallpaper.com/static/images/HD-Wallpapers-89_FxDoTt7.jpg'
      }];

      return _react3.default.createElement(_reactImages2.default, {
        images: LIGHTBOX_IMAGE_SET,
        isOpen: this.state.lightboxIsOpen
        // isOpen
        , onClickPrev: this.gotoPrevious,
        onClickNext: this.gotoNext,
        onClose: this.closeLightbox
      });
    }
  }]);
  return Gallery;
}(_react3.default.Component));

exports.default = Gallery;
module.exports = exports['default'];