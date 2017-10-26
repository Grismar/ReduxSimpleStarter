const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

config.plugins = config.plugins || [];
if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': `"production"`
    }
  }));
  config.output.path = __dirname + '/dist';
  config.plugins.push(new CopyWebpackPlugin([
    { from: 'index.html' },
    { from: 'favicon.ico' },
    { from: 'manifest.json' },
    { from: 'img/**/*' },
    { from: 'style/**/*' },
  ]));
} else {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': `""`
    }
  }));
}

module.exports = config;
