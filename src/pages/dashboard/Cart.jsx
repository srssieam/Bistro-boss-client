import SectionTitle from "../../SharedComponentes/SectionTitle";
import useCart from "../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce( (total, item) => total + item.price, 0)
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

            </div>
        </div>
    );
};

export default Cart;