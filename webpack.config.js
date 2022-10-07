const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/main.ts',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@atoms': path.resolve(__dirname, './src/components/atoms'),
			'@mocelules': path.resolve(__dirname, './src/components/molecules'),
			'@organisms': path.resolve(__dirname, './src/components/organisms'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@templates': path.resolve(__dirname, './src/templates'),
		},
		extensions: ['.js', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
				exclude: '/node_modules/',
			}
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
		new DefinePlugin({
			__VUE_OPTIONS_API__: false,
			__VUE_PROD_DEVTOOLS__: false,
		}),
	],
};
