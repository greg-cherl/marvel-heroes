import classes from './Biography.module.css'

export const Biography = () => {
	return (
		<div className={classes['biography']}>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>full name</span>
				<span className={classes['biography-value']}>Terry Mcginnis</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>alert-egos</span>
				<span className={classes['biography-value']}>No alter egos found.</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>aliases</span>
				<span className={classes['biography-value']}>
					Batman II, The Tomorrow Knight, Batman Beyond
				</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>place-Of-Birth</span>
				<span className={classes['biography-value']}>
					Gothan City, 25th Century
				</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>first-Apperance</span>
				<span className={classes['biography-value']}>Batman Beyond #1</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>publisher</span>
				<span className={classes['biography-value']}>DC Comics</span>
			</div>
		</div>
	)
}
