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
        </div>
    );
};

export default MenuCategoryItems;