import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptionsType } from './types/types'

export const buildDevServer = (
	options: BuildOptionsType
): DevServerConfiguration => {
	return {
		port: options.port,
		open: true,
	}
}
