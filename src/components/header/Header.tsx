import { Navigation } from '../navigation/Navigation'
import classes from './Header.module.css'

export const Header = () => {
	return (
		<>
			<header className={classes['header']}>
				<Navigation />
				<div className={classes['wrapper']}>
					<span className={classes['marvel']}>Marvel</span>
					<span className={classes['studios']}>Studios</span>
				</div>
			</header>
		</>
	)
}
