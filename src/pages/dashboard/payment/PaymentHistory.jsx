import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../SharedComponentes/SectionTitle";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: payments} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div className="px-24">
            <Helmet>
                <title>Bistro Boss | Payment History</title>
            </Helmet>
            <SectionTitle heading='PAYMENT HISTORY' subHeading='At a Glance!'></SectionTitle>
            <h2>Total Payments: {payments?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table rounded rounded-t-2xl overflow-hidden">
                    <thead className="bg-[#e69040] text-white">
                        <tr className="text-xl font-semibold ">
                            <th></th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Price</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                           payments?.map((item, idx) => <tr key={item._id}>
                                <td>{idx + 1}</td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.transactionId}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                   {item.date}
                                </th>

                            </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;