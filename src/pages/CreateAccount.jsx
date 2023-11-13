import { useContext, useState } from "react";
import loginBg from '../assets/others/authenticationBg.png'
import loginImg from '../assets/others/authentication1.png'
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useForm  } from "react-hook-form"
import { Helmet } from "react-helmet-async";


const CreateAccount = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data =>{
        console.log(data);
        createUser(data.email, data.password)
            .then(res =>{
                const loggedUser = res.user;
                console.log(loggedUser)
            })
    }



    return (
        <div style={{ backgroundImage: `url(${loginBg})` }} className="bg-no-repeat bg-cover h-max lg:h-[100vh] w-full flex justify-center items-center">
            <Helmet>
                <title>Bistro Boss | Sign up</title>
            </Helmet>
            <div className='max-w-screen-xl shadow-2xl h-full lg:h-[80vh] grid md:grid-cols-2 w-full'>
                <div className='w-full flex items-center justify-center'>
                    <img src={loginImg} alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="lg:px-20">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-700">Name is required !</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-700">Email is required !</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:;<>,.?~\\/-]).{6,}$/ })} type="password" name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && <span className="text-red-700">password is required !</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-700">password must be more then 6 character!</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-700">password must have one uppercase, one lowercase, one number and one spacial characters!</span>}
                        </div>
                        
                        <p className='text-red-700 font-semibold'>{error}</p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-[#d4813d] hover:bg-[#b67947] border-none text-white">Sign up</button>
                        </div>
                    </form>
                    <div className='space-y-4 mt-4'>
                        <p className='text-xl text-center text-[#b67947]'>Already registered? <Link className=' font-bold' to='/login'>Go to login</Link></p>
                        <p className='text-center text-black'>Or Sign In with</p>
                        <div className='flex justify-center'>
                            <button className='border-2 border-gray-800 p-3 rounded-full'><FcGoogle className='text-xl'></FcGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateAccount;