import { FC, useState } from 'react'
import { Powerstats } from '../Powerstats/Powerstats'
import { Biography } from '../Biography/Biography'
import { Appearance } from '../Appearance/Appearance'
import { Connections } from '../Connections/Connections'
import { Tabs } from '@/ui-kit/Tabs/Tabs'
import classes from './HeroTabs.module.css'

type PropsType = {
	hero: any
}

export const HeroTabs: FC<PropsType> = ({ hero }) => {
	const [activeTab, setActiveTab] = useState<string>('powerstats')

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
		<>
			<Tabs tabs={tabs} onClick={setActiveTab} activeTab={activeTab} />
			<div className={classes['tabs-content']}>
				{tabs.find(tab => tab.value === activeTab)?.component || null}
			</div>
		</>
	)
}
