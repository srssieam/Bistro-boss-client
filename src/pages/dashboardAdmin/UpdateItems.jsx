import Swal from "sweetalert2";
import SectionTitle from "../../SharedComponentes/SectionTitle";
import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItems = () => {
    const item = useLoaderData();
    const { _id, name, category, recipe, image, price } = item;
    console.log(name)
    const { register, handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async data => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        // image upload to imgbb and then get an url
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.recipeName,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // send new added item info to the server
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount){
                // show success popup
                reset();
                Swal.fire({
                    title: "Item updated!",
                    text: `${data.recipeName} is updated`,
                    icon: "success",
                    timer: 1500
                  });
            }
        }
        console.log(res.data)
    }


    return (
        <div className="px-24">
            <SectionTitle heading="update item"></SectionTitle>
            <div className="my-5 p-9 bg-[#F3F3F3] text-gray-800">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="recipeName" className="font-semibold text-xl">Recipe name*</label><br />
                            <input {...register("recipeName", {required:true})} defaultValue={name} className="px-4 py-3 w-full mt-4" type="text" name="recipeName" id="" placeholder="Recipe name" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="category" className="font-semibold text-xl">Category*</label><br />
                                <select  {...register("category", {required:true})} defaultValue={category}  className="px-4 py-3 w-full mt-4">
                                    <option disabled>category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="soup">Soup</option>
                                    <option value="drink">Drink</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="price" className="font-semibold text-xl">Price*</label><br />
                                <input {...register("price", {required:true})} defaultValue={price} className="px-4 py-3 w-full mt-4" type="text" name="price" id="" placeholder="Price" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="recipe" className="font-semibold text-xl">Recipe Details*</label><br />
                        <textarea {...register('recipe', {required:true})} defaultValue={recipe}  cols="30" rows="10" className="textarea textarea-bordered px-4 py-3 w-full mt-4" type="text" name="recipe" id="" placeholder="Recipe details" />
                    </div>
                    <label htmlFor="image" className="font-semibold text-xl">Upload Image*</label><br />
                    <input {...register('image', {required:true})} type="file"  className="file-input w-full max-w-xs text-gray-500" />
                    <br />
                    <button type="submit" className="text-white text-xl font-semibold px-3 py-2 mt-6 bg-[#965e2a] flex items-center gap-3">Update item <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;