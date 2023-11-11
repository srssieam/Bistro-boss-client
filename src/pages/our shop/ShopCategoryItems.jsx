import FoodCard from "../../SharedComponentes/FoodCard";


const ShopCategoryItems = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3 px-6 lg:px-0 my-10">
                        {
                            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
    );
};

export default ShopCategoryItems;