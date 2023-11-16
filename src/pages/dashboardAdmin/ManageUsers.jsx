import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../SharedComponentes/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleteUser = user =>{
        console.log("user to delete",user)
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
            axiosSecure.delete(`/users/${user._id}`)
                .then(res =>{
                    // console.log(res);
                    refetch()
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
    }

    
    const handleUpdateUser = user =>{
        console.log("user to update",user)
    }

    return (
        <div className="px-24">
            <SectionTitle subHeading={"How many"} heading={"Manage all users"}></SectionTitle>
            <h2 className="text-3xl uppercase mb-4">Total Users: {users.length}</h2>
            {/* item list */}
                <div className="overflow-x-auto">
                    <table className="table rounded rounded-t-2xl overflow-hidden">
                        <thead className="bg-[#e69040] text-white">
                            <tr className="text-xl font-semibold ">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
 
                            {
                                users?.map((user, idx) => <tr key={users._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>${user.email}</td>
                                    <th>
                                        <button onClick={()=>handleUpdateUser(user)} className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-[#e69040]"><FaUsers></FaUsers></button>
                                    </th>
                                    <th>
                                        <button onClick={()=>handleDeleteUser(user)} className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
        </div>
    );
};

export default ManageUsers;