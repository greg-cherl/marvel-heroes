import ReactDOM from 'react-dom/client'
import './global.css'
import './reset.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { App } from './app/app'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
)
