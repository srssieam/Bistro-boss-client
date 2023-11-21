import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth()
    return (
        <div className="px-11 pt-14">
            <h2 className="text-4xl uppercase font-semibold">Hi, Welcome back! {user?.displayName}</h2>
        </div>
    );
};

export default UserHome;