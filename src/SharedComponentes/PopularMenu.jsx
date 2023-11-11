import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu([]);
    const popularItems = menu.filter(item => item.category === 'popular')

    return (
        <div className="max-w-screen-xl mx-auto my-10 px-6 lg:px-0">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    popularItems?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-8">
                <button className="btn bg-transparent text-xl font-semibold border-0 border-b-4 border-b-gray-700  shadow-xl">View full menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;