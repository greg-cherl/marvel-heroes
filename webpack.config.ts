import webpack from 'webpack'

import { buildWebpack } from './config/build/buildWebpack'
import { BuildModeType, BuildPathsType } from './config/build/types/types'
import path from 'path'

type EnvVariablesType = {
	mode: BuildModeType
	port: number
}

export default (env: EnvVariablesType) => {
	const paths: BuildPathsType = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'apps', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	}

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths: paths,
	})

	return config
}
