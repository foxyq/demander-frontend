require('babel-polyfill');

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.resolve(__dirname, '../static/dist');
var config = require('../src/config');
var host = config.host;
var port = (+process.env.PORT + 1) || 3001;
// var port = 8000;
var autoprefixer = require('autoprefixer');
var HappyPack = require('happypack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools')).development();
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}


var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

var combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

var babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, {plugins: combinedPlugins});
delete babelLoaderQuery.env;

babelLoaderQuery.plugins = babelLoaderQuery.plugins || [];
var reactTransform = null;
for (var i = 0; i < babelLoaderQuery.plugins.length; ++i) {
  var plugin = babelLoaderQuery.plugins[i];
  if (Array.isArray(plugin) && plugin[0] === 'react-transform') {
    reactTransform = plugin;
  }
}

if (!reactTransform) {
  reactTransform = ['react-transform', {transforms: []}];
  babelLoaderQuery.plugins.push(reactTransform);
}

if (!reactTransform[1] || !reactTransform[1].transforms) {
  reactTransform[1] = Object.assign({}, reactTransform[1], {transforms: []});
}

reactTransform[1].transforms.push({
  transform: 'react-transform-hmr',
  imports: ['react'],
  locals: ['module']
});

const webpackConfig = module.exports = () => {
  return {
    devtool: 'cheap-source-map',
    context: path.resolve(__dirname, '..'),
    entry: {
      'main': [
        'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
        './src/helpers/fontConfig.font',
        './src/assets/css/main.styl',
        './src/client.js'
      ]
    },
    output: {
      path: assetsPath,
      filename: '[name]-[hash].js',
      chunkFilename: '[name]-[chunkhash].js',
      publicPath: 'http://' + host + ':' + port + '/dist/'
    },
    module: {
      loaders: [
//         {
//     test: /\.css$/,
//     loader: 'style-loader!css-loader'
// },
        { test: /\.css$/, loaders: ['to-string-loader', 'css-loader?url=false'] },
        {
          test: /\.less$/,
          loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase=dashes!postcss!less-loader"
        },
        { test: /\.js?$/,
          exclude: /(node_modules)\/|fontConfig.font.js$/,
          loaders: [ 'happypack/loader' ]
        },
        { test: /\.json$/, include: path.resolve(__dirname, "../src/"), loader: 'json-loader' },
        {
          test: /\.styl$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "../src/"),
          loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase=dashes!postcss!stylus-loader"
        },
        {
          test: /\.font.js$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "../src/helpers"),
          loader: "style-loader!url-loader!file-loader!file?name=iconfont.css!fontgen?formats=woff,eot,ttf&fileName=iconfont/iconfont[ext]"
        },
          {
          test: /\.(ttf|eot|woff|woff2)$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "../src/"),
          loader: 'url-loader?limit=8192&name=fonts/[name].[ext]',
        },
        { test: webpackIsomorphicToolsPlugin.regular_expression('images'), include: path.resolve(__dirname, "../src/"),loader: 'url-loader?limit=10240' },
        { test: webpackIsomorphicToolsPlugin.regular_expression('svg'), include: path.resolve(__dirname, "../src/"),loader: 'url-loader?limit=10240' }
      ],
      noParse: [/.test\.js$/]
    },
    postcss: function() {
      return [autoprefixer({ browsers: ['last 2 versions'] })];
    },
    progress: true,
    resolve: {
      modules: [
        path.resolve('./src'),
        'node_modules'
      ],
      extensions: ['', '.json', '.js']
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:8000'),
        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: true,
        __DEVTOOLS__: true,
      }),
      // new webpack.DllReferencePlugin({
      //   context: path.join(__dirname, ".."),
      //   manifest: require("./dlls/manifests/vendor.json")
      // }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new HappyPack({
        threads: 4,
        loaders: ['babel?' + JSON.stringify(babelLoaderQuery), 'eslint-loader']
      }),
      webpackIsomorphicToolsPlugin.development()
    ],
  }
};

/* eslint-enable */
