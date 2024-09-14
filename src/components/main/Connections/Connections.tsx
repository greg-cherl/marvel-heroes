import { FC } from 'react'
import classes from './Connections.module.css'

type PropsType = {
	data: any
}

export const Connections: FC<PropsType> = ({ data }) => {
	return (
		<div className={classes['connections']}>
			<div className={classes['connections-item']}>
				<div className={classes['connections-label']}>group--affiliation</div>
				<div className={classes['connections-value']}>
					{data?.['group-affiliation']}
				</div>
			</div>
			<div className={classes['connections-item']}>
				<div className={classes['connections-label']}>relatives</div>
				<div className={classes['connections-value']}>
					{data?.['relatives']}
				</div>
			</div>
		</div>
	)
}
