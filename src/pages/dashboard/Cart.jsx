import SectionTitle from "../../SharedComponentes/SectionTitle";
import useCart from "../../hooks/useCart";
import { RiDeleteBin6Line } from 'react-icons/ri';

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div className="px-24">
            <SectionTitle subHeading={"My Cart"} heading={"Wanna add more?"}></SectionTitle>
            <div className="flex justify-between">
                <h2 className="text-3xl uppercase">Total orders: {cart.length}</h2>
                <h2 className="text-3xl uppercase">Total Price: ${totalPrice}</h2>
                <button className="btn text-white bg-[#e69040]">Pay</button>
            </div>

            {/* item list */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
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
                                        <button className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;