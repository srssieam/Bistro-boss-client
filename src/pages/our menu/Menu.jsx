import { Helmet } from "react-helmet-async";
import Cover from "../../SharedComponentes/Cover";
import banner3 from "../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={banner3} covertitle={"OUR MENU"} coverDesc={"Would you like to try a dish?"}></Cover>
        </div>
    );
};

export default Menu;