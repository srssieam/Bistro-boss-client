import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Vortex } from "react-loader-spinner";


const AdminRout = ({children}) => {
    const {user, loading}= useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center h-[100vh]">
            <Vortex
                visible={true}
                height="350"
                width="350"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'orange', 'yellow', 'red', 'orange', 'yellow']}
            />
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRout;