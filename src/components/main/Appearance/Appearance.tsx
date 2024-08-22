import classes from './Appearance.module.css'

export const Appearance = () => {
	return (
		<div className={classes['appearance']}>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>gender</div>
				<div className={classes['appearance-value']}>Male</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>race</div>
				<div className={classes['appearance-value']}>human</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>height</div>
				<div className={classes['appearance-value']}>5' 10''</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>weight</div>
				<div className={classes['appearance-value']}>170 lb</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>eye-color</div>
				<div className={classes['appearance-value']}>blue</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>hair-color</div>
				<div className={classes['appearance-value']}>black</div>
			</div>
		</div>
	)
}
