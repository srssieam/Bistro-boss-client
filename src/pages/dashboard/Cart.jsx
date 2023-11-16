import Swal from "sweetalert2";
import SectionTitle from "../../SharedComponentes/SectionTitle";
import useCart from "../../hooks/useCart";
import { RiDeleteBin6Line } from 'react-icons/ri';
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = id =>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {    
            axiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                    // console.log(res);
                    refetch()
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Item has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
    }

    return (
        <div className="px-24">
            <SectionTitle subHeading={"My Cart"} heading={"Wanna add more?"}></SectionTitle>
            <div className="flex justify-between">
                <h2 className="text-3xl uppercase">Total orders: {cart.length}</h2>
                <h2 className="text-3xl uppercase">Total Price: ${totalPrice}</h2>
                <button className="btn text-white bg-[#e69040]">Pay</button>
            </div>

            {/* item list */}
                <div className="overflow-x-auto">
                    <table className="table rounded-t-2xl overflow-hidden">
                        {/* head */}
                        <thead className="bg-[#e69040] text-white">
                            <tr className="text-xl font-semibold">
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart?.map((item, idx) => <tr key={item._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-14">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={()=>handleDelete(item._id)} className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
        </div>
    );
};

export default Cart;