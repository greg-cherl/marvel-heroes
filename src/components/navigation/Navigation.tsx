import { Link } from 'react-router-dom'
import classes from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav className={classes['nav']}>
			<ul className={classes['menu']}>
				<li className={classes['menu-item']}>
					<Link to={'/'}>Home</Link>
				</li>
				<li className={classes['menu-item']}>
					<Link to={'/all-heroes'}>All Heroes</Link>
				</li>
			</ul>
		</nav>
	)
}
