import { Link, NavLink, Outlet } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';
import { FaCalendarDays, FaRectangleList, FaUtensils, FaBook, FaUsers } from 'react-icons/fa6';
import { FaEnvelope } from "react-icons/fa";
import { TbStarsFilled } from 'react-icons/tb';
import { AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai';
import './dashboard.css';

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex max-w-screen-xl mx-auto">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#e69040]">
                <Link to='/' className="flex flex-col items-center text-[#e2e2e2] font-serif mt-8">
                    <h3 className="text-lg lg:text-xl font-semibold">BISTRO BOSS</h3>
                    <h3 className="text-md lg:text-lg font-semibold tracking-wide uppercase">Restaurant</h3>
                </Link>
                <ul id="dashboard" className="flex flex-col ml-7 gap-5 my-9">
                    {
                        isAdmin ?
                            <>  {/* admins dashboard nav links */}
                                <li><NavLink to="/dashboard/adminHome"><ImHome className="text-2xl"></ImHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItems"><FaUtensils className="text-2xl"></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems"><FaRectangleList className="text-2xl"></FaRectangleList> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageBookings"><FaBook className="text-2xl"></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/manageUsers"><FaUsers className="text-2xl"></FaUsers> Manage Users</NavLink></li>
                            </>
                            :
                            <> {/* common users dashboard nav links */}
                                <li><NavLink to="/dashboard/userHome"><ImHome className="text-2xl"></ImHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><FaCalendarDays className="text-2xl"></FaCalendarDays> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><BsCart4 className="text-2xl"></BsCart4> My Cart</NavLink></li>
                                <li><NavLink to="/dashboard/addReview"><TbStarsFilled className="text-2xl"></TbStarsFilled> Add Review</NavLink></li>
                                <li><NavLink to="/dashboard/addReview"><FaRectangleList className="text-2xl"></FaRectangleList> My Bookings</NavLink></li>
                            </>
                    }

                    {/* shared links */}
                    <hr className="mr-6" />
                    <li><NavLink to="/"><ImHome className="text-2xl"></ImHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><AiOutlineMenu className="text-2xl"></AiOutlineMenu> Menu</NavLink></li>
                    <li><NavLink to="/shop/SALADS"><AiOutlineShopping className="text-2xl"></AiOutlineShopping> Shop</NavLink></li>
                    <li><NavLink to="/contact"><FaEnvelope className="text-2xl"></FaEnvelope> Contact</NavLink></li>
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