require('babel-polyfill');

var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var strip = require('strip-loader');
var autoprefixer = require('autoprefixer');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './static/dist');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

var extractLESS = new ExtractTextPlugin({ id: 'styles-less', filename: '[name]-styles-less.css', ignoreOrder: true })
var extractSTYL = new ExtractTextPlugin({ id: 'styles-styl', filename: '[name]-styles-styl.css', ignoreOrder: true })

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      './tsrc/helpers/fontConfig.font',
      './tsrc/assets/css/main.styl',
      './tsrc/client.js'
    ],
    vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'redux-form', 'react-select', 'react-helmet', 'react-css-modules', 'react-notification-system', 'react-router-redux', 'redux-connect', 'lodash']
  },
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
    // { test: /(\.css$)/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] },
    // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    // {
    // test: /\.css$/,
    // loader: 'style-loader!css-loader'
    // },
    {
      test: /\.less$/,
      loader: extractLESS.extract({ fallbackLoader: 'style-loader', loader: 'css!postcss!less' })
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [strip.loader('debug', 'console.log'), 'babel']
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.styl$/,
      exclude: /node_modules/,
      loader: extractSTYL.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]&camelCase=dashes!postcss!stylus-loader' })
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      exclude: /node_modules/,
      loader: 'url-loader?limit=8192&name=fonts/[name].[ext]'
    }, {
      test: webpackIsomorphicToolsPlugin.regular_expression('images'),
      loader: 'url-loader?limit=10240'
    },
    { test: webpackIsomorphicToolsPlugin.regular_expression('svg'), loader: 'url-loader?limit=10240' },
    {
      test: /\.font.js$/,
      exclude: /node_modules/,
      loader: "style-loader?css-loader!url-loader!file-loader!file?name=iconfont.css!fontgen?formats=woff,eot,ttf&fileName=iconfont/iconfont[ext]"

    }]
  },
  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 versions'] })]
  },
  // progress: true,
  resolve: {
    modules: [
      path.resolve('./tsrc'),
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: projectRootPath }),

    // css files from the extract-text-plugin loader
    extractSTYL,
    extractLESS,
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:8000'),
      'process.env.NODE_ENV': JSON.stringify('production'),

      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),

    webpackIsomorphicToolsPlugin
  ]
};
