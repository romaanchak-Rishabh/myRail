import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import App from '../App'
import ProtectedRoute from './ProtectedRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    },
    {
        path: "/search",
        element: (
            <ProtectedRoute>
                {/* <SearchPage /> */}
            </ProtectedRoute>
        )
    }
])