'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Auth
 */
var Auth = require('./utils/auth');
// const session = require('express-session')
// const RedisStore = require('connect-redis')(session)

/*
 * Views
 */


var app = new _express2.default();
var server = new _http2.default.Server(app);

var targetUrl = 'http://' + _config2.default.host + ':' + _config2.default.port;

_httpProxy2.default.createProxyServer({
  target: targetUrl,
  ws: false
});

app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'static')));

// const expirationInSeconds = require('config').get('jwt').get('expiration') || dayInSeconds;

// store secret to env variable and connect to redis
// app.use(session({
//   secret: 'inloop dofe developmenat',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 100000000 }
// }))

// app.use(session({
//   store: new RedisStore({
//     url: process.env.REDISCLOUD_URL,
//     ttl: 100000000
//   }),
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 100000000 }
// }))

app.use(Auth);
app.use(_index2.default);

if (_config2.default.port) {
  server.listen(_config2.default.port, function (err) {
    if (err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', _config2.default.host, _config2.default.port);
    if (_config2.default.openBrowserAfterBuild) {
      setTimeout(function () {
        return (0, _open2.default)('http://localhost:3000');
      }, 2000);
    }
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}