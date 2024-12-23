import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/home'
import ListingPage from '../pages/listing'

export const routes =  createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/listingPage',
        element: <ListingPage/>
    }
])