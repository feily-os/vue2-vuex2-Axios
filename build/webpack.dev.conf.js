var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../index.html'),
        inject: true
    }),
    new ExtractTextPlugin("[name].[hash].css"),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    })
];

config.dev.proxyTable = {
    '/mockjs': {
        target: 'http://192.168.83.250:50000/',
        // host: "192.168.100.105",
        secure: false,
        changeOrigin: false
    },
    '/zhihu': {
        target: 'http://news-at.zhihu.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/zhihu': ''
        }
    }
}


// 动态向入口配置中注入 webpack-hot-middleware/client
// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function(name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

config.devtool = "#source-map";
module.exports = config;