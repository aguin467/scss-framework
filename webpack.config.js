/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('node-sass');

module.exports = {
    entry: './src/app/app.js',

    mode: 'development',

    output: {
        filename: '[name].bundle.js',

        path: path.resolve(__dirname, 'dist'),
    },

    optimization: {
        minimize: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                type: 'javascript/esm',
                exclude: /node_modules/,

                use: {
                    loader: 'babel-loader',

                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },

    devServer: {
        hot: true,

        contentBase: path.resolve(__dirname, 'dist'),

        publicPath: '/',

        port: 8080,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};
