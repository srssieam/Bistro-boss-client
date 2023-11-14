import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({ item }) => {
    const { _id, name, image, recipe, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (food)=>{
        if(user && user.email){
            // Todo: send cart item to the database
            console.log(food, user?.email)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res =>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            title: "Item added!",
                            text: `${name} added to your cart`,
                            icon: "success",
                            timer: 1500
                          });
                    }
                })
        }
        else{
            Swal.fire({
                title: "Login first",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', {state: {from: location}})
                }
              });
        }
    }
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
                    <button onClick={()=>handleAddToCart(item)} className="btn bg-transparent md:text-xl font-semibold border-0 border-b-4 text-yellow-600 border-b-yellow-700  shadow-xl">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;