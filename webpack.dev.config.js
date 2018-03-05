const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')

const webpackConfigDev = {
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
    devServer: {
        // contentBase: resolve('../app'),
        historyApiFallback: true,
        hot: true,
        inline:true,
        // host: '0.0.0.0',
        port: 8014,
        open:true,
        proxy: {
            '/mock': 'http://localhost:8888',
        }
    },
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
