
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Menu from '../pages/our menu/Menu';
import OurShop from '../pages/our shop/OurShop';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Dashboard from '../layouts/Dashboard';
import Cart from '../pages/dashboard/Cart';
import PrivateRoute from '../routes/PrivateRoute'
import ManageUsers from '../pages/dashboardAdmin/ManageUsers';

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
                path: 'contact',
                element:<Contact></Contact>
            },
            {
                path: 'shop/:category',
                element:<OurShop></OurShop>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'signup',
                element:<CreateAccount></CreateAccount>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: 'cart',
                element:<Cart></Cart>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
])
export default Router;