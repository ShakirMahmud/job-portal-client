import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import registerLottieData from '../assets/register.json'
import { AuthContext } from "../provider/AuthProvider";
const Register = () => {

    const [isClicked, setIsClicked] = useState(true);
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // password validation regex 6 characters one uppercase one lowercase 

        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        if (!password.match(/[A-Z]/)) {
            alert('Password must contain at least one uppercase letter');
            return;
        }

        if (!password.match(/[a-z]/)) {
            alert('Password must contain at least one lowercase letter');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.log(error.massage);
            })

        
    }

    const handleSignUpWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.log(error.massage);
            })
        }
    

    return (
        <div className="flex flex-col lg:flex-row-reverse lg:items-center">
            <div className="w-auto">
                <Lottie animationData={registerLottieData} loop={true} autoplay={true} className="w-full h-[50vh]" />
            </div>
            <div className="card bg-white w-full max-w-xl mx-auto p-6 rounded-xl shrink-0 shadow-2xl">
                <h2 className="text-3xl font-bold text-center">Register Now!</h2>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" className="input rounded-xl input-bordered" required />
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="your photo-url" className="input rounded-xl input-bordered" required />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input rounded-xl input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={isClicked ? 'password' : 'text'} name='password' placeholder="password" className="input rounded-xl input-bordered" required />
                        <button type="button" onClick={() => setIsClicked(!isClicked)} className="absolute right-5 top-[3rem] text-2xl text-gray-700">
                            {
                                isClicked ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                            }
                        </button>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary bg-btn_bg rounded-xl text-white">Sign Up</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <span className="label-text">Already have an account? </span>
                    <Link to='/login' className="link link-hover">Log In</Link>
                </div>
                <div className="w-full flex justify-center py-6">
                    <button
                        onClick={handleSignUpWithGoogle}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-lg shadow hover:shadow-md transition-all duration-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <FcGoogle size={24} />
                        <span className="text-lg font-medium">Sign Up with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;