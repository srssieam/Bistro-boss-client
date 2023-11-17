
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../SharedComponentes/SectionTitle';
import useMenu from '../../hooks/useMenu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();


    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                refetch()
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Item has been deleted.",
                        icon: "success",
                        timer: 1500
                    });
                }
            }
        });
    }


    return (
        <div className="px-24">
            <Helmet>
                <title>Bistro Boss | Manage item</title>
            </Helmet>
            <SectionTitle subHeading={"Hurry up!"} heading={"Manage all items"}></SectionTitle>
            <h2 className="text-3xl uppercase mb-4">Total Items: {menu.length}</h2>
            {/* item list */}
            <div className="overflow-x-auto">
                <table className="table rounded rounded-t-2xl overflow-hidden">
                    <thead className="bg-[#e69040] text-white">
                        <tr className="text-xl font-semibold ">
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu?.map((item, idx) => <tr key={item._id}>
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
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-[#e69040]"><FaEdit></FaEdit></button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteItem(item)} className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
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

export default ManageItems;