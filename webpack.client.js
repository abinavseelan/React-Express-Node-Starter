const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';
const DEV = !PROD;

module.exports = {
    entry: './client/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },

    mode: PROD ? 'production' : 'development',

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        stats: "errors-only",
        proxy: {
            "/api": {
                target: "http://localhost:9001",
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(PROD ? 'production' : 'development'),
        }),
        new HTMLWebpackPlugin({
            template: './client/index.html',
        }),
    ]
}