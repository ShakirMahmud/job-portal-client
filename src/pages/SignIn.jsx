import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import loginLottieData from '../assets/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const SignIn = () => {
    const [isClicked, setIsClicked] = useState(true);
    const { signinUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signinUser(email, password)
            .then(result => {
                const user  = {email: email};
                // navigate(location?.state ? location.state : '/');
                axios.post('http://localhost:5000/jwt', user, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                    navigate(location?.state ? location.state : '/');
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignInWithGoogle = () => {

        signInWithGoogle()
            .then(result => { 
                const user  = {email: result.email};
                // navigate(location?.state ? location.state : '/');
                axios.post('http://localhost:5000/jwt', user, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                    navigate(location?.state ? location.state : '/');
                })

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row-reverse lg:items-center max-w-7xl mx-auto gap-12">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <Lottie 
                            animationData={loginLottieData} 
                            loop={true} 
                            autoplay={true} 
                            className="w-full max-w-xl h-[60vh]"
                        />
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                        <div className="card bg-white/80 backdrop-blur-sm w-full max-w-xl mx-auto p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Welcome Back</h2>
                            <form onSubmit={handleSignIn} className="space-y-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-gray-700">Email</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        name='email' 
                                        placeholder="Enter your email" 
                                        className="input input-bordered bg-gray-50 focus:bg-white transition-all duration-300 rounded-xl" 
                                        required 
                                    />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text font-medium text-gray-700">Password</span>
                                    </label>
                                    <input 
                                        type={isClicked ? 'password' : 'text'} 
                                        name='password' 
                                        placeholder="Enter your password" 
                                        className="input input-bordered bg-gray-50 focus:bg-white transition-all duration-300 rounded-xl pr-12" 
                                        required 
                                    />
                                    <button 
                                        type='button' 
                                        onClick={() => setIsClicked(!isClicked)} 
                                        className="absolute right-4 top-[3rem] text-2xl text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {isClicked ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </button>
                                    <div className="flex justify-end mt-2">
                                        <Link to='/auth/forgetPassword' className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="form-control mt-8">
                                    <button 
                                        type='submit' 
                                        className="btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl py-3 h-auto"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                
                                <div className="relative my-8">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>
                                
                                <button
                                    onClick={handleSignInWithGoogle}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                                >
                                    <FcGoogle size={24} />
                                    <span className="font-medium">Sign in with Google</span>
                                </button>
                                
                                <p className="text-center mt-6 text-gray-600">
                                    Don't have an account yet?{' '}
                                    <Link to='/register' className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                        Register
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;