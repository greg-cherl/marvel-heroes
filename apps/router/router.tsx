import { createBrowserRouter } from 'react-router-dom'
import { App } from '../app/app'
import { AllHeroes } from '@/pages/allHeroes/allHeroes'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/all-heroes',
				element: <AllHeroes />,
			},
		],
	},
])
