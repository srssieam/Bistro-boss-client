import loginBg from '../assets/others/authenticationBg.png'
import loginImg from '../assets/others/authentication1.png'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';

const Login = () => {

    useEffect( () =>{
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password, captcha)

        if (validateCaptcha(captcha)==true) {
            alert('Captcha Matched');
        }
   
        else {
            alert('Captcha Does Not Match');
        }
    }
    return (
        <div style={{ backgroundImage: `url(${loginBg})` }} className="bg-no-repeat bg-cover h-max lg:h-[100vh] w-full flex justify-center items-center">
            <div className='max-w-screen-xl shadow-2xl h-full lg:h-[80vh] grid md:grid-cols-2 w-full'>
                <div className='w-full flex items-center justify-center'>
                    <img src={loginImg} alt="" />
                </div>
                <div>
                    <form onSubmit={handleLogin} className="lg:px-20">
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name="captcha" placeholder="type here" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-[#d4813d] hover:bg-[#b67947] border-none text-white">Login</button>
                        </div>
                    </form>
                    <div className='space-y-4 mt-4'>
                    <p className='text-xl text-center text-[#b67947]'>New Here? <Link className=' font-bold' to='/signUp'>Create a new account</Link></p>
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

export default Login;