import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";


const MenuCategoryItems = ({ categoryName, coverImg, title, desc  }) => {
    return (
        <div>
            {
                title && <Cover img={coverImg} covertitle={`${title}`} coverDesc={`${desc}`}></Cover>
            }
            <div className="grid lg:grid-cols-2 gap-6 px-6 lg:px-0 max-w-screen-xl mx-auto my-20">
                {
                    categoryName?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-8">
                <Link to={`/shop/${title}`}><button className="btn bg-transparent md:text-xl font-semibold border-0 border-b-4 border-b-gray-700  shadow-xl">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuCategoryItems;