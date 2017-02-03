'use strict';

// isProd is true when we run this command - npm run build
const isProd = (process.env.npm_lifecycle_event === 'build');
console.log('\x1b[96m isProduction- %s\x1b[0m \n', isProd);

const webpack = require('webpack');
const path = require("path");

// Webpack plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Add more from here
// https://webpack.js.org/configuration/
module.exports = {
  context: __dirname, //home directory for webpack
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  entry: {
    app: './src/js/app.js',
    vendor: ['jquery', 'bootstrap']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),// where to store build files
    publicPath: '',// to be used in index.html
    filename: "js/[name].[hash].js" // build file name
  },
  module: {
    rules: [
      // Catch js files and compile them to es5
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["es2015"]
        },
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      // Catch all css, extract and store them to a separate file
      {
        test: /\.css$/,
        loader: isProd ? ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader',
        }) : 'style-loader!css-loader',
      },
      // Catch image files and base64 if bigger than 8k while leave rest
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'url-loader?limit=8192&name=/img/[name].[hash].[ext]'
      },
      // Catch all fonts and store them to a separate folder
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader?name=/fonts/[name].[ext]?[hash]'
      }

    ]
  },
  plugins: [
    // Minify HTML + Inject assets in html
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './src/index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
        removeAttributeQuotes: isProd,
        minifyJS: isProd,
        minifyCSS: isProd,
        minifyURLs: isProd
        // More options here
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
    // Expose some global vars in our code
    new webpack.DefinePlugin({
      API_CONFIG: JSON.stringify({
        'baseUrl': 'http://localhost.com:8080/api/v1'
      }),
      'process.env': {
        NODE_ENV: isProd ? '"production"' : '"development"'
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ],
  // Dev server related configs
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: 9000,
    host: 'localhost',
    open: true,
    inline: true,
    hot: true,
    noInfo: false,
    quiet: false,
    stats: 'errors-only'
  },
  devtool: isProd ? false : '#cheap-eval-source-map',
  watch: false,
  target: 'web'
};


let plugins = [];
if (isProd) {
  // Production only plugins
  plugins.push(
    // Minify JS files
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // Extract css and store them into a separate file
    new ExtractTextPlugin('css/styles.[hash].css'),
    new webpack.BannerPlugin('Webpack example (c) 2016')
  )
} else {
  // Dev only plugins
  plugins.push(
    // Required when hot = true in dev server configs
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports.plugins = (module.exports.plugins || []).concat(plugins);


