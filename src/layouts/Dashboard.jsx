import { NavLink, Outlet } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';
import { FaCalendarDays, FaRectangleList } from 'react-icons/fa6';
import { TbStarsFilled } from 'react-icons/tb';

const Dashboard = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#e69040]">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome"><ImHome className="text-2xl"></ImHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendarDays className="text-2xl"></FaCalendarDays> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><BsCart4 className="text-2xl"></BsCart4> My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/addReview"><TbStarsFilled className="text-2xl"></TbStarsFilled> Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/addReview"><FaRectangleList className="text-2xl"></FaRectangleList> My Bookings</NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;