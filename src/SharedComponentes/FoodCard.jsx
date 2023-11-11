

const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="shadow-xl">
            <div className="max-h-72 relative">
                <img src={`${image}`} className="h-full w-full object-cover bg-center" alt="" />
                <p className="absolute bg-gray-900 text-white font-semibold text-lg py-2 px-3 top-6 right-6">${price}</p>
            </div>
            <div className="p-7 space-y-4">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p>{recipe}</p>
                <div className="flex justify-center my-8">
                    <button className="btn bg-transparent md:text-xl font-semibold border-0 border-b-4 text-yellow-600 border-b-yellow-700  shadow-xl">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;