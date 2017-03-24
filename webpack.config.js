var path = require('path');
var webpack = require('webpack');

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
        exclude: /node_modules/,
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
    new webpack.HotModuleReplacementPlugin()
  ]
};
