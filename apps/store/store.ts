import heroesReducer from '@/slices/heroesSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		heroes: heroesReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
