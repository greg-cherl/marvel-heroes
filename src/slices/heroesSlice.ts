import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../../apps/api/api'

type fetchHeroType = {
	type: 'search' | 'getById'
	value: string
}

export const fetchHero = createAsyncThunk(
	'heroes/fetchHero',
	async ({ type, value }: fetchHeroType) => {
		if (type === 'search') {
			const response = await API.searchHero(value)
			return response.data
		}
		if (type === 'getById') {
			const response = await API.getHero(value)
			return response.data
		}
	}
)

type heroesSearchType = {
	data: any[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
	searchValue: string
	hero: any
}

const initialState: heroesSearchType = {
	data: [],
	status: 'idle',
	error: null,
	searchValue: '',
	hero: {},
}

const heroesSlice = createSlice({
	name: 'heroes',
	initialState,
	reducers: {
		setSearchValue: (state, action) => {
			state.searchValue = action.payload
		},
		setHero: (state, action) => {
			state.hero = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchHero.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchHero.fulfilled, (state, action) => {
				if (action.payload.results) {
					state.status = 'succeeded'
					state.data = action.payload.results
				} else {
					state.status = 'succeeded'
					state.hero = action.payload
				}
			})
			.addCase(fetchHero.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export const { setSearchValue, setHero } = heroesSlice.actions
export default heroesSlice.reducer
