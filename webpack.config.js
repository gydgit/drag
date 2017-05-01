var webpack = require('webpack');
var path = require('path');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery',jQuery: 'jquery','window.jQuery':'jquery'});

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});

module.exports = {
	entry: './src/js/entry.js',
	output: {
		path: path.resolve(__dirname, './out/'),
		filename: 'index.js',
	},
	module: {
		loaders: [
			{test: /.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /.css$/, loader: 'style-loader!css-loader'},
			{test: /.(jpg|png)$/, loader: 'url-loader?limit=8192'}
		]
	},
    plugins: [providePlugin, uglifyPlugin]

}