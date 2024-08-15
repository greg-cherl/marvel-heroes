export type BuildPathsType = {
	entry: string
	html: string
	output: string
}
export type BuildModeType = 'production' | 'development'

export type BuildOptionsType = {
	port: number
	paths: BuildPathsType
	mode: BuildModeType
}
