import classes from './HeroCard.module.css'

export const HeroCard = () => {
	return (
		<div className={classes['card']}>
			<img
				className={classes['image']}
				src='https://www.superherodb.com/pictures2/portraits/10/100/639.jpg'
				alt='hero'
			/>
			<p className={classes['hero-name']}>Batman</p>
		</div>
	)
}
