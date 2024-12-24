import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/home'
import ListingPage from '../pages/listing'
import ProductPage from '../pages/product'

export const routes =  createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/listingPage',
        element: <ListingPage/>
    },
    {
        path: '/ListingPage/product',
        element: <ProductPage/>
    }
])