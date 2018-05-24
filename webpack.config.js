const path = require('path');
const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/index.js',
    output: {
	path: path.resolve(__dirname, 'public'),
	filename: 'bundle.js',
    },
    context: __dirname,
    devtool: 'source-map',
    devServer: {
	port: 3001,
	open: true,
	contentBase: './public',
	proxy: {
	    "/": "http://localhost:3000"
	}
    },
    resolve: {
	extensions: ['.js', '.jsx', '.json', '*'],
    },
    plugins: [
	new HtmlWebpackPlugin({
	    hash: true,
	    template: './client/src/index.html',
	    path: path.resolve(__dirname, 'public'),
	    filename: 'index.html',
	}),
    ],
    module: {
	rules: [
	    {
		test: /jsx?$/,
		exclude: /(node_modules|bower_components)/,
		use: [{
		    loader: 'babel-loader',
		    options: {
			presets: ['react', 'es2015', 'stage-2'],
		    },
		}],
	    },
	    {
		test: /\.(s*)css$/,
		use: ['style-loader', 'css-loader']
            },	
	],
    },
};
