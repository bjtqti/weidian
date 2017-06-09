var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		address:['./src/address/index.js'],
		vendor: ['vue']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use:[
					{loader:'css-loader',options: { importLoaders: 1 } },
					'postcss-loader'
				]
			})
		},{
			test:/\.es6$/,
			loader:"babel-loader"
		},
			{
				test: /\.(png|jpg|gif)$/,
				loader:"url-loader?limit=10000"
			},
			{
				test:/\.(svg|ttf|eot|woff)/,
				loader:"url-loader"
			}
		]
	},
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // Specify the common bundle's name.
        })
	]
};