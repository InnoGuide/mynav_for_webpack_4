const webpack = require('webpack');
const path = require('path');
const BitBarWebpackProgressPlugin = require('bitbar-webpack-progress-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins:
        [new BitBarWebpackProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Template',
            template: 'src/index.html',
            inlineSource: '.js$'
        })]
}
module.exports = config;