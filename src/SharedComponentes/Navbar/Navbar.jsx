import { Link, NavLink } from "react-router-dom";
import './NavbarStyle.css'


const Navbar = () => {
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/menu'>Our menu</NavLink></li>
        <li><NavLink to='/shop'>Our shop</NavLink></li>
        <li><NavLink to='/sing'>Sign in</NavLink></li>
    </>
    return (
        <div className=" bg-[#0000008e] fixed z-10 w-full">
            <div className="navbar flex justify-between max-w-screen-xl mx-auto py-4">
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-[#393a39] text-white rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="flex flex-col items-center text-[#e2e2e2] font-serif">
                        <h3 className="text-lg lg:text-xl font-semibold">BISTRO BOSS</h3>
                        <h3 className="text-md lg:text-lg font-semibold tracking-wide uppercase">Restaurant</h3>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className=" flex gap-6 px-6 text-xl">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;