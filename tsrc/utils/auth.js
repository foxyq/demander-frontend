'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _express = require('express');

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.post('/save-user', function (req, res) {
  req.session.user = req.body;
  res.json(req.session.user);
});

router.post('/logout', function (req, res) {
  req.session.destroy();
  res.json({});
});

router.get('/loadAuth', function (req, res) {
  res.json(req.session && req.session.user || null);
});

router.post('/authenticate', function (req, res) {
  _request2.default.post({ url: _config2.default.apiURL + '/authenticate?userType=LEADER',
    form: (0, _extends3.default)({}, req.body, {
      client_secret: process.env.CLIENT_SECRET //eslint-disable-line
    })
  }, function (err, httpResponse, body) {
    if (err) {
      console.log(err);
    }
    res.status(httpResponse.statusCode).send(body);
  });
});

exports.default = router;
module.exports = exports['default'];