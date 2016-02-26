const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const assets = require('postcss-assets');
const modulesLocalByDefault = require('postcss-modules-local-by-default');
const cssShort = require('postcss-short');
const nested = require('postcss-nested');

module.exports = {
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    entry: {
        client: isProd ? ['./src/index.prod'] : ['webpack-hot-middleware/client', './src/index.dev'],
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
                'DEVTOOLS': JSON.stringify(process.env.DEVTOOLS),
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'CATALOG_API_KEY': JSON.stringify(process.env.CATALOG_API_KEY),
                'CATALOG_API_HOST': JSON.stringify(process.env.CATALOG_API_HOST),
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
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[name]__[local]!postcss-loader'),
            exclude: /node_modules/
        }, {
            test: /\.(jpg|png|jpeg|git|ico|woff|svg|woff2|eot)$/,
            loader: 'file-loader'
        }, {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }],
    },
    postcss() {
    return [
        assets(),
        modulesLocalByDefault,
        nested,
        autoprefixer,
        cssShort()
    ];
}
};
