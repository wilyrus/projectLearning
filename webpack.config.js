
const path = require('path');
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.csv$/,
            loader: 'csv-loader',
            options: {
                dynamicTyping: true,
                header: true,
                skipEmptyLines: true
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production',
                NODE_ENV: 'development'
            }
        }),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist'))
    ]
};