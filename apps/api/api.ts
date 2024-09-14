import axios from 'axios'

const API_KEY = '66826889f078993eba48d72a7ac52107'

const instance = axios.create({
	baseURL: `https://superheroapi.com/api.php/${API_KEY}`,
})

export const API = {
	searchHero(hero: string) {
		return instance.get(`/search/${hero}`)
	},
}
