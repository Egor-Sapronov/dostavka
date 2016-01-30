const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    entry: {
        client: isProd ? ['./src/index'] : ['webpack-hot-middleware/client', './src/index'],
    },
    output: {
        path: `${__dirname}/static`,
        filename: isProd ? '[hash].[name].js' : '[name].js',
        publicPath: '/static/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['client'],
            template: './src/html/index.html',
            inject: 'body',
        }),
        new ExtractTextPlugin(isProd ? '[hash].[name].css' : '[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            },
        }),
        !isProd ? new webpack.HotModuleReplacementPlugin() : new webpack.optimize.OccurenceOrderPlugin(),
        !isProd ? new webpack.NoErrorsPlugin() : new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.(jpg|png|jpeg|git|ico|woff|svg|woff2|eot)$/,
            loader: 'file-loader',
        }, {
            test: /\.js?/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
        }],
    },
};
