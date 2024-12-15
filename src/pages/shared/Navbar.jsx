import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleSignOut = () => {
        logout()
            .then(() => {
                console.log('sign out successfully');
            })
            .catch(error => console.log(error));
    }
    const links = <div className="flex gap-3">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myApplications">My Applications</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-bold flex items-center gap-0">
                        <span className="border-b-4 border-black ">
                            <span className="border-b-4 border-black  italic ">Job</span>
                        </span>
                        <span className="font-semibold text-gray-500  italic">Portal</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                            :
                            <div>
                                <Link to="/register">Register</Link>
                                <Link to="/login" className="btn">Sign In</Link>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;