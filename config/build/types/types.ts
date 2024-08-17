export type BuildPathsType = {
	entry: string
	html: string
	public: string
	output: string
	src: string
}
export type BuildModeType = 'production' | 'development'

export type BuildOptionsType = {
	port: number
	paths: BuildPathsType
	mode: BuildModeType
}
