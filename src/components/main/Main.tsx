import { Tabs } from '@/ui-kit/Tabs/Tabs'
import classes from './Main.module.css'
import { useState } from 'react'
import { Powerstats } from './Powerstats/Powerstats'
import { Biography } from './Biography/Biography'
import { Appearance } from './Appearance/Appearance'
import { Work } from './Work/Work'
import { Connections } from './Connections/Connections'

export const Main = () => {
	const [activeTab, setActiveTab] = useState<string>('powerstats')

	const tabs = [
		{ id: 1, value: 'powerstats', component: <Powerstats /> },
		{ id: 2, value: 'biography', component: <Biography /> },
		{ id: 3, value: 'appearance', component: <Appearance /> },
		// { id: 4, value: 'work', component: <Work /> },
		{ id: 5, value: 'connections', component: <Connections /> },
	]

	return (
		<div className={classes['main']}>
			<div className={classes['wrapper-card']}>
				<div className={classes['hero-card']}>
					<div className={classes['wrapper-image']}>
						<img
							className={classes['image']}
							src='https://www.superherodb.com/pictures2/portraits/10/100/639.jpg'
							alt='hero'
						/>
					</div>
					<div className={classes['hero']}>
						<h1 className={classes['hero-name']}>Batman</h1>
						<Tabs tabs={tabs} onClick={setActiveTab} activeTab={activeTab} />
						<div className={classes['tabs-content']}>
							{tabs.find(tab => tab.value === activeTab)?.component || null}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
