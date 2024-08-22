import { FC } from 'react'
import classes from './Tabs.module.css'

type TabType = {
	id: number
	value: string
}

type TabsPropsType = {
	tabs: TabType[]
	activeTab: string
	onClick: (value: string) => void
}

export const Tabs: FC<TabsPropsType> = ({ tabs, onClick, activeTab }) => {
	return (
		<div className={classes['tabs']}>
			{tabs &&
				tabs.map(tab => {
					return (
						<div
							key={tab.id}
							className={`${classes['tab']} ${
								activeTab === tab.value && classes['active']
							}`}
							onClick={() => onClick(tab.value)}
						>
							<span className={classes['tab-label']}>{tab.value}</span>
						</div>
					)
				})}
		</div>
	)
}
