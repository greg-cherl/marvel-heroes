import classes from './Search.module.css'
import { FC } from 'react'

type PropsType = {
	handleChange: (event: any, showList: boolean) => void
	handleSetHero: (hero: any) => void
	searchValue: string
	searchHeroes: any
	showList: boolean
}

export const Search: FC<PropsType> = ({
	handleChange,
	handleSetHero,
	searchValue,
	searchHeroes,
	showList,
}) => {
	console.log('searchHeroes', searchHeroes)
	return (
		<>
			<form className={classes['search']}>
				<input
					className={classes['search-input']}
					type='text'
					placeholder='Search your superhero'
					value={searchValue}
					onChange={event => handleChange(event, true)}
				/>
				{showList && (
					<div className={classes['search-list']}>
						{searchHeroes.data?.map((hero: any) => (
							<div
								key={hero.id}
								className={classes['search-item']}
								onClick={() => handleSetHero(hero)}
							>
								<img
									className={classes['image']}
									src={hero.image.url}
									alt={hero.name}
								/>
								<p className={classes['hero-name']}>{hero.name}</p>
							</div>
						))}
					</div>
				)}
			</form>
		</>
	)
}
