import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../SharedComponentes/SectionTitle";
import { useForm } from "react-hook-form"


const AddItems = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className="px-24">
            <SectionTitle heading="add an item" subHeading="Whats new"></SectionTitle>
            <div className="my-5 p-9 bg-[#F3F3F3] text-gray-800">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="recipeName" className="font-semibold text-xl">Recipe name*</label><br />
                            <input {...register("recipeName", {required:true})} className="px-4 py-3 w-full mt-4" type="text" name="recipeName" id="" placeholder="Recipe name" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="category" className="font-semibold text-xl">Category*</label><br />
                                <select  {...register("Category", {required:true})}  className="px-4 py-3 w-full mt-4">
                                    <option disabled selected>category</option>
                                    <option value="Salad">Salad</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Soup">Soup</option>
                                    <option value="Drink">Drink</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="price" className="font-semibold text-xl">Price*</label><br />
                                <input {...register("price", {required:true})} className="px-4 py-3 w-full mt-4" type="text" name="price" id="" placeholder="Price" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="chef" className="font-semibold text-xl">Recipe Details*</label><br />
                        <textarea {...register('recipe details')}  cols="30" rows="10" className="px-4 py-3 w-full mt-4" type="text" name="chef" id="" placeholder="Recipe details" />
                    </div>
                    <label htmlFor="image" className="font-semibold text-xl">Upload Image*</label><br />
                    <input {...register('image', {required:true})} type="file" className="file-input w-full max-w-xs text-gray-500" />
                    <br />
                    <button type="submit" className="text-white text-xl font-semibold px-3 py-2 mt-6 bg-[#965e2a] flex items-center gap-3">Add item <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;