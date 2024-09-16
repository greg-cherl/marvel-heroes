import { FC } from 'react'
import classes from './Appearance.module.css'

type PropsType = {
	data: any
}

export const Appearance: FC<PropsType> = ({ data }) => {
	return (
		<div className={classes['appearance']}>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>gender</div>
				<div className={classes['appearance-value']}>{data?.['gender']}</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>race</div>
				<div className={classes['appearance-value']}>{data?.['race']}</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>height</div>
				<div className={classes['appearance-value']}>{data?.['height'][0]}</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>weight</div>
				<div className={classes['appearance-value']}>{data?.['weight'][0]}</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>eye-color</div>
				<div className={classes['appearance-value']}>{data?.['eye-color']}</div>
			</div>
			<div className={classes['appearance-item']}>
				<div className={classes['appearance-label']}>hair-color</div>
				<div className={classes['appearance-value']}>
					{data?.['hair-color']}
				</div>
			</div>
		</div>
	)
}
