import { FC } from 'react'
import classes from './Biography.module.css'

type PropsType = {
	data: any
}

export const Biography: FC<PropsType> = ({ data }) => {
	return (
		<div className={classes['biography']}>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>full name</span>
				<span className={classes['biography-value']}>
					{data?.['full-name']}
				</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>alert-egos</span>
				<span className={classes['biography-value']}>
					{data?.['alter-egos']}
				</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>aliases</span>
				<span className={classes['biography-value']}>{data?.['aliases']}</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>place-Of-Birth</span>
				<span className={classes['biography-value']}>
					{data?.['place-of-birth']}
				</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>first-Apperance</span>
				<span className={classes['biography-value']}>
					{data?.['first-appearance']}
				</span>
			</div>
			<div className={classes['biography-item']}>
				<span className={classes['biography-label']}>publisher</span>
				<span className={classes['biography-value']}>
					{data?.['publisher']}
				</span>
			</div>
		</div>
	)
}
