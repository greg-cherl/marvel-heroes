declare module '*.module.css' {
	const classes: { [key: string]: string }
	export = classes
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
	import React from 'react'
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
	export default SVG
}
