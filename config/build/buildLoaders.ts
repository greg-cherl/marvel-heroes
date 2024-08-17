import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { ModuleOptions } from 'webpack'
import { BuildOptionsType } from './types/types'

export const buildLoaders = (
	options: BuildOptionsType
): ModuleOptions['rules'] => {
	const isDev = options.mode === 'development'

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	}

	const svgrLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									currentColor: true,
								},
							},
						],
					},
				},
			},
		],
	}

	const moduleCssLoader = {
		test: /\.css$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						namedExport: false,
						exportLocalsConvention: 'as-is',
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
					},
				},
			},
		],
	}

	const tsLoader = {
		test: /\.tsx?$/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					getCustomTransformers: () => ({
						before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
					}),
				},
			},
		],
		exclude: /node_modules/,
	}

	return [assetLoader, moduleCssLoader, tsLoader, svgrLoader]
}
