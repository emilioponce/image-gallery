const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.scss', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loaders: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), // do not emit files if errors exist
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
