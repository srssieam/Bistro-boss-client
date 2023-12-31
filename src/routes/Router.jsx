
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
import AdminRout from '../routes/AdminRout';
import ManageUsers from '../pages/dashboardAdmin/ManageUsers';
import AddItems from '../pages/dashboardAdmin/AddItems';
import ManageItems from '../pages/dashboardAdmin/ManageItems';
import UpdateItems from '../pages/dashboardAdmin/UpdateItems';
import Payment from '../pages/dashboard/payment/Payment';
import PaymentHistory from '../pages/dashboard/payment/PaymentHistory';
import AdminHome from '../pages/dashboardAdmin/AdminHome/AdminHome';
import UserHome from '../pages/dashboard/UserHome/UserHome';

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
                path: 'userHome',
                element:<UserHome></UserHome>
            },
            {
                path: 'cart',
                element:<Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },

            // admin only
            {
                path: 'adminHome',
                element: <AdminRout><AdminHome></AdminHome></AdminRout>
            },
            {
                path: 'manageUsers',
                element: <AdminRout><ManageUsers></ManageUsers></AdminRout>
            },
            {
                path: 'manageItems',
                element: <AdminRout><ManageItems></ManageItems></AdminRout>
            },
            {
                path: 'addItems',
                element: <AdminRout><AddItems></AddItems></AdminRout>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRout><UpdateItems></UpdateItems></AdminRout>,
                loader: ({params})=> fetch(`https://bistro-boss-server-nu-lyart.vercel.app/menu/${params.id}`)
            }
        ]
    }
])
export default Router;