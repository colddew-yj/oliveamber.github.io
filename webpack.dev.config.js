const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')
const webpackConfigDev = {
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.(less|css)$/,
  //       use: ['css-loader', 'style-loader', 'less-loader']
  //     }
  //   ]
  // },
  devtool: 'eval-source-map',
  devServer: {
    // contentBase: resolve('../app'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8014,
    open: false,
    proxy: {
      '/mock': 'http://localhost:8888'
    }
  }
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
