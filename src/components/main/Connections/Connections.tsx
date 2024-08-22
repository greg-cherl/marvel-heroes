import classes from './Connections.module.css'

export const Connections = () => {
	return (
		<div className={classes['connections']}>
			<div className={classes['connections-item']}>
				<div className={classes['connections-label']}>group--affiliation</div>
				<div className={classes['connections-value']}>
					Batman Family, Justice League Unlimited
				</div>
			</div>
			<div className={classes['connections-item']}>
				<div className={classes['connections-label']}>relatives</div>
				<div className={classes['connections-value']}>
					Bruce Wayne (biological father), Warren McGinnis (father, deceased),
					Mary McGinnis (mother), Matt McGinnis (brother)
				</div>
			</div>
		</div>
	)
}
