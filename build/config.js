const path = require('path');
module.exports = {
    prod: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        assetsRoot: path.resolve(__dirname, '../dist'),
        index: path.resolve(__dirname, '../dist/index.html'),
        zip: true,
        productionGzipExtensions: ['js', 'css'],
        productionSourceMap: true,
        productionGzip: false,
        bundleAnalyzerReport: process.env.npm_config_report,
        env: {
            NODE_ENV: '"production"'
        }
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        assetsRoot: path.resolve(__dirname, '../dist'),
        proxyTable: {},

        // Various Dev Server settings
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        port: 11100, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,
        /**
         * Source Maps
         */
        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',
        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,
        cssSourceMap: true
    }
};