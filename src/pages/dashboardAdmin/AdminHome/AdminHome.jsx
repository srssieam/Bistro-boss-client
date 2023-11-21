import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaSackDollar, FaUsers } from "react-icons/fa6";
import { RiRestaurant2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data : stats  } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div className="px-11 pt-14">
            <h2 className="text-4xl uppercase font-semibold">Hi, Welcome back! {user?.displayName}</h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaSackDollar className="text-5xl"></FaSackDollar>
                    </div>
                    <div className="stat-title text-xl font-semibold">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-5xl"></FaUsers>
                    </div>
                    <div className="stat-title text-xl font-semibold">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <RiRestaurant2Fill className="text-5xl"></RiRestaurant2Fill>
                    </div>
                    <div className="stat-title text-xl font-semibold">Products</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <TbTruckDelivery className="text-5xl"></TbTruckDelivery>
                    </div>
                    <div className="stat-title text-xl font-semibold">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;