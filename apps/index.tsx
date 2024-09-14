import ReactDOM from 'react-dom/client'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
import './global.css'
import './reset.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
