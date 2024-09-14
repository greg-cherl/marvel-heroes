import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../../apps/api/api'

export const searchHero = createAsyncThunk(
	'heroes/searchHero',
	async (hero: string) => {
		const response = await API.searchHero(hero)
		return response.data
	}
)

type heroesSearchType = {
	data: any[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
	searchValue: string
}

const initialState: heroesSearchType = {
	data: [],
	status: 'idle',
	error: null,
	searchValue: '',
}

const heroesSlice = createSlice({
	name: 'heroes',
	initialState,
	reducers: {
		setSearchValue: (state, action) => {
			state.searchValue = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(searchHero.pending, state => {
				state.status = 'loading'
			})
			.addCase(searchHero.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.data = action.payload.results
			})
			.addCase(searchHero.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export const { setSearchValue } = heroesSlice.actions
export default heroesSlice.reducer
