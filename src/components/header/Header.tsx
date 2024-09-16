import classes from './Header.module.css'

export const Header = () => {
	return (
		<>
			<header className={classes['header']}>
				<div className={classes['wrapper']}>
					<span className={classes['marvel']}>Marvel</span>
					<span className={classes['studios']}>Studios</span>
				</div>
			</header>
		</>
	)
}
