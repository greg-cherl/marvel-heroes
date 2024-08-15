import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { BuildOptionsType } from './types/types'
import { buildResolvers } from './buildResolvers'

export const buildWebpack = (
	options: BuildOptionsType
): webpack.Configuration => {
	const isDev = options.mode === 'development'

	return {
		mode: options.mode,
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev && 'inline-source-map',
		devServer: isDev && buildDevServer(options),
	}
}
