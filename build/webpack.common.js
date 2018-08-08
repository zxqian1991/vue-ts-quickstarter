const {
    resolve,
    assetsPath
} = require('./util/helper');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: [
            './src/app.ts',
            'babel-polyfill'
        ],
        style: [
            './src/style.less',
            // './src/pages/app/style.less'
        ]
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/gi,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('media/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.css$/,
                enforce: 'post',
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.scss$/,
                enforce: 'post',
                use: ExtractTextPlugin.extract({
                    fallback: 'css-loader',
                    use: 'sass-loader'
                })
            }, {
                test: /\.less$/,
                enforce: 'post',
                use: ExtractTextPlugin.extract(['css-loader', 'less-loader']),

            }, {
                test: /\.html$/,
                use: 'raw-loader',
                include: [path.join(__dirname, '../src/index.html')]
            }, {
                test: /\.html$/,
                loader: 'vue-template-loader',
                exclude: [path.join(__dirname, '../src/index.html')],
                options: {
                    transformToRequire: {
                        img: 'src'
                    },
                    scoped: true
                }
            }, {
                test: /\.tsx?$/,
                use: [
                    'babel-loader', {
                        loader: 'awesome-typescript-loader',
                        options: {
                            errorsAsWarnings: true
                        }
                    }
                ]
            }
        ]
    },
};