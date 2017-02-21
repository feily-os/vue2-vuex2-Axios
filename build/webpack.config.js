// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的main.js文件
    entry: {
        index: ['./build/dev-client', path.resolve(__dirname, '../app/src/main.js')],
        common: ["vue", "vue-router", "vue-resource"]
    },
    // 输出配置
    output: {
        path: path.resolve(__dirname, '../dist/'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: "vue",
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass")
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css?sourceMap")
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: "babel"
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: "file?images/[hash].[ext]"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file"
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.(html|tpl)$/,
            loader: "html"
        }]
    },
    vue: {
        loaders: {
            js: 'babel',
            scss: ExtractTextPlugin.extract("sass"),
            css: ExtractTextPlugin.extract("css")
        },
    },
    resolve: {
        // require时省略的扩展名，如：require("module") 不需要module.js
        extensions: ['', '.js', '.vue'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        //后续直接 require("别名") 即可
        alias: {
            'vue$': 'vue/dist/vue.js',
            "src": path.resolve(__dirname, "../app/src"),
            "assets": path.resolve(__dirname, "../app/src/assets"),
            "components": path.resolve(__dirname, "../app/src/components"),
            "baseView": path.resolve(__dirname, "../app/src/views")
        }
    },
    dev: {

    }
}