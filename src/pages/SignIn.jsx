import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import loginLottieData from '../assets/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { CiLineHeight } from 'react-icons/ci';

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
                axios.post('http://localhost:5000/jwt', user)
                .then(data => {
                    // localStorage.setItem('access-token', data.data.token);
                    // navigate(location?.state ? location.state : '/');
                    console.log(data)
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignInWithGoogle = () => {

        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                // navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row-reverse lg:items-center">
            <div className="w-auto">
                <Lottie animationData={loginLottieData} loop={true} autoplay={true} className="w-full h-[50vh]" />
            </div>
            <div className="card bg-white w-full max-w-xl mx-auto p-6 rounded-xl shrink-0 shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={isClicked ? 'password' : 'text'} name='password' placeholder="password" className="input rounded-xl input-bordered" required />
                        <button type='button' onClick={() => setIsClicked(!isClicked)} className="absolute right-5 top-[3rem] text-2xl text-gray-700">
                            {isClicked ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </button>
                        <label>
                            <Link to='/auth/forgetPassword' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary bg-btn_bg rounded-xl text-white">Login</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <span className="label-text">Don't have an account yet? </span>
                    <Link to='/register' className="link link-hover">Register</Link>
                </div>
                <div className="w-full flex justify-center py-6">
                    <button
                        onClick={handleSignInWithGoogle}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-lg shadow hover:shadow-md transition-all duration-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <FcGoogle size={24} />
                        <span className="text-lg font-medium">Log In with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;