const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const config = require('./config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
Object.keys(commonConfig.entry).forEach(function (name) {
    commonConfig.entry[name] = ['./build/dev-client'].concat(commonConfig.entry[name]);
});
module.exports = merge(commonConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
});