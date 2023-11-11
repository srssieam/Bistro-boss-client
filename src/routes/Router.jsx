
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Menu from '../pages/our menu/Menu';
import OurShop from '../pages/our shop/OurShop';

const Router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: 'menu',
                element:<Menu></Menu>
            },
            {
                path: 'shop',
                element:<OurShop></OurShop>
            }
        ]
    }
])
export default Router;