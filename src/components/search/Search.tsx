import classes from './Search.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { searchHero, setSearchValue } from '@/slices/heroesSlice'

export const Search = () => {
	const dispatch = useDispatch()
	const searchValue = useSelector((state: any) => state.heroes.searchValue)
	const heroes = useSelector((state: any) => state.heroes)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(event.target.value))
		//@ts-ignore
		dispatch(searchHero(event.target.value))
	}

	return (
		<>
			<form className={classes['search']}>
				<input
					className={classes['search-input']}
					type='text'
					placeholder='Search your superhero'
					value={searchValue}
					onChange={handleChange}
				/>
				<div className={classes['search-list']}>
					{heroes.data?.map((hero: any) => (
						<div key={hero.id} className={classes['search-item']}>
							<img
								className={classes['image']}
								src={hero.image.url}
								alt={hero.name}
							/>
							<p className={classes['hero-name']}>{hero.name}</p>
						</div>
					))}
				</div>
			</form>
		</>
	)
}
