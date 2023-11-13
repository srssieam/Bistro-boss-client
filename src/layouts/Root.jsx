import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SharedComponentes/Footer";
import Navbar from "../SharedComponentes/Navbar/Navbar";


const Root = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar> }
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer> }
        </div>
    );
};

export default Root;