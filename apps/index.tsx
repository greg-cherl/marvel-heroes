import ReactDOM from 'react-dom/client'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
import './global.css'
import './reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
