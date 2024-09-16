import { Tabs } from '@/ui-kit/Tabs/Tabs'
import classes from './Main.module.css'
import { useEffect, useState } from 'react'
import { Powerstats } from './Powerstats/Powerstats'
import { Biography } from './Biography/Biography'
import { Appearance } from './Appearance/Appearance'
import { Connections } from './Connections/Connections'
import { Search } from '../search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHero, setHero, setSearchValue } from '@/slices/heroesSlice'
import { AppDispatch } from 'apps/store/store'
import { HeroTabs } from './HeroTabs/HeroTabs'

export const Main = () => {
	const [showList, setShowList] = useState(false)

	const searchValue = useSelector((state: any) => state.heroes.searchValue)
	const searchHeroes = useSelector((state: any) => state.heroes)
	const hero = useSelector((state: any) => state.heroes.hero)
	const dispatch = useDispatch<AppDispatch>()

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		showList: boolean
	) => {
		dispatch(fetchHero({ type: 'search', value: event.target.value }))
		dispatch(setSearchValue(event.target.value))
		setShowList(showList)
	}

	const handleSetHero = (hero: any) => {
		dispatch(setHero(hero))
		setShowList(false)
		dispatch(setSearchValue(''))
	}

	useEffect(() => {
		dispatch(fetchHero({ type: 'getById', value: '70' }))
	}, [])

	return (
		<div className={classes['main']}>
			<div className={classes['wrapper-card']}>
				<div>
					<Search
						handleChange={handleChange}
						handleSetHero={handleSetHero}
						searchValue={searchValue}
						searchHeroes={searchHeroes}
						showList={showList}
					/>
				</div>
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
						{/* <Tabs tabs={tabs} onClick={setActiveTab} activeTab={activeTab} /> */}
						<HeroTabs hero={hero} />
						{/* {tabs.find(tab => tab.value === activeTab)?.component || null} */}
					</div>
				</div>
			</div>
		</div>
	)
}
