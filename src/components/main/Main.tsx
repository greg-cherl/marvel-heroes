import { Tabs } from '@/ui-kit/Tabs/Tabs'
import classes from './Main.module.css'
import { useState } from 'react'
import { Powerstats } from './Powerstats/Powerstats'
import { Biography } from './Biography/Biography'
import { Appearance } from './Appearance/Appearance'
import { Work } from './Work/Work'
import { Connections } from './Connections/Connections'
import { Search } from '../search/Search'
import { useSelector } from 'react-redux'

export const Main = () => {
	const [activeTab, setActiveTab] = useState<string>('powerstats')
	const hero = useSelector((state: any) => state.heroes.hero)
	console.log('hero', hero)
	const tabs = [
		{
			id: 1,
			value: 'powerstats',
			component: <Powerstats data={hero.powerstats} />,
		},
		{
			id: 2,
			value: 'biography',
			component: <Biography data={hero.biography} />,
		},
		{
			id: 3,
			value: 'appearance',
			component: <Appearance data={hero.appearance} />,
		},
		{
			id: 4,
			value: 'connections',
			component: <Connections data={hero.connections} />,
		},
	]

	return (
		<div className={classes['main']}>
			<div className={classes['wrapper-card']}>
				<Search />
				<div className={classes['hero-card']}>
					<div className={classes['wrapper-image']}>
						<img
							className={classes['image']}
							src={hero.image?.url}
							alt='hero'
						/>
					</div>
					<div className={classes['hero']}>
						<h1 className={classes['hero-name']}>{hero.name}</h1>
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
