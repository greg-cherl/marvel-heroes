import { FC } from 'react'
import classes from './Powerstats.module.css'

type PropsType = {
	data: any
}

export const Powerstats: FC<PropsType> = ({ data }) => {
	return (
		<div className={classes['powerstats']}>
			<div className={classes['powerstats-item']}>
				<span className={classes['powerstats-label']}>intelligence</span>
				<span className={classes['powerstats-value']}>
					{data?.intelligence}
				</span>
			</div>
			<div className={classes['powerstats-item']}>
				<span className={classes['powerstats-label']}>strength</span>
				<span className={classes['powerstats-value']}>{data?.strength}</span>
			</div>
			<div className={classes['powerstats-item']}>
				<span className={classes['powerstats-label']}>speed</span>
				<span className={classes['powerstats-value']}>{data?.speed}</span>
			</div>
			<div className={classes['powerstats-item']}>
				<span className={classes['powerstats-label']}>durability</span>
				<span className={classes['powerstats-value']}>{data?.durability}</span>
			</div>
			<div className={classes['powerstats-item']}>
				<span className={classes['powerstats-label']}>power</span>
				<span className={classes['powerstats-value']}>{data?.power}</span>
			</div>
			<div className={classes['powerstats-item']}>
				<span className={classes['powerstats-label']}>combat</span>
				<span className={classes['powerstats-value']}>{data?.combat}</span>
			</div>
		</div>
	)
}
