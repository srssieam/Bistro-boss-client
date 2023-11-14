import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth"

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();

    const {data: cart = []} = useQuery({
        queryKey: ['cart', user?.email], // create different key for different user
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart] // returned data as an array
};

export default useCart;