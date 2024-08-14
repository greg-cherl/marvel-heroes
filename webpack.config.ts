import path from 'path'
import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

type ModeType = 'production' | 'development'

type EnvVariablesType = {
	mode: ModeType
}

export default (env: EnvVariablesType) => {
	const isDev = env.mode === 'development'
	const isProd = env.mode === 'production'

	const config: webpack.Configuration = {
		mode: env.mode ?? 'development',
		entry: path.resolve(__dirname, 'apps', 'index.tsx'),
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
			}),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
		],
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [MiniCssExtractPlugin.loader, 'css-loader'],
				},
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		devtool: isDev && 'inline-source-map',
		devServer: isDev
			? {
					port: 3000,
					open: true,
			  }
			: undefined,
	}

	return config
}
