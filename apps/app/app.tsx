import { Link, Outlet } from 'react-router-dom'

export const App = () => {
	return (
		<>
			<div>Start</div>
			<Link to={'/all-heroes'}>all heroes</Link>
			<Outlet />
		</>
	)
}
