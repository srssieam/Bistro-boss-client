import { Outlet } from "react-router-dom";
import Footer from "../SharedComponentes/Footer";
import Navbar from "../SharedComponentes/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;