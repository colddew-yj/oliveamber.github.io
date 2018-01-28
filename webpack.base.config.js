const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const webpackConfigBase = {
    entry: {
        app: path.join(__dirname, 'src/app.jsx'),
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.less']
        // alias: {
        //     // components: path.join(__dirname, '/src/redux')
        // },
    },
    // resolveLoader: {
    //   moduleExtensions: ['-loader']
    // },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'less', options: {sourceMap: true, modules: true}}
                    ]
                }),
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:4].[ext]'
                }
            },
            {
                test: /\.(woff|eot|ttf|svg|gif)$/,
                loader: 'url',
                options: {
                    limit: 8192,
                    name: 'font/[name].[hash:4].[ext]'
                }
            },
        ],
    },
    plugins: [
        // 提取css
        new ExtractTextPlugin('style.css'),
        // 将打包后的资源注入到html文件内
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'client', // 入口文件名
        //     filename: 'common.bundle.js', // 打包后的文件名
        //     minChunks: function (module, count) {
        //         return module.resource &&
        //             /\.js$/.test(module.resource) &&
        //             module.resource.indexOf(resolve('../node_modules')) === 0
        //     }
        // })
    ]
}

module.exports = webpackConfigBase
