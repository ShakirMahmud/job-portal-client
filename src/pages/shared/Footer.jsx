import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaReddit } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className=" text-gray-800 ">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <Link to="/" className="text-2xl font-bold flex items-center gap-0">
                                <span className="border-b-4 border-black ">
                                    <span className="border-b-4 border-black  italic ">Job</span>
                                </span>
                                <span className="font-semibold text-gray-500  italic">Portal</span>
                            </Link>

                            <p className="max-w-sm mt-2 text-gray-500 ">
                                Join 31,000+ others and never miss out on new tips, tutorials, and more.
                            </p>

                            <div className="flex mt-6 -mx-2">
                                <a
                                    href="#"
                                    className="mx-2 text-gray-600  transition-colors duration-300 hover:text-blue-500 "
                                    aria-label="Reddit"
                                >
                                    <FaReddit />
                                </a>
                                <a
                                    href="https://www.facebook.com/shakir.mahmud.9/"
                                    className="mx-2 text-gray-600  transition-colors duration-300 hover:text-blue-500 "
                                    aria-label="Facebook"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="https://github.com/ShakirMahmud"
                                    className="mx-2 text-gray-600  transition-colors duration-300 hover:text-blue-500 "
                                    aria-label="Github"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h3 className="text-gray-900 uppercase ">About</h3>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Company
                                </a>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Community
                                </a>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Careers
                                </a>
                            </div>

                            <div>
                                <h3 className="text-gray-900 uppercase ">Blog</h3>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Tech
                                </a>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Music
                                </a>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Videos
                                </a>
                            </div>

                            <div>
                                <h3 className="text-gray-900 uppercase ">Products</h3>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Mega Cloud
                                </a>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Aperion UI
                                </a>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm text-gray-800  hover:underline"
                                >
                                    Meraki UI
                                </a>
                            </div>

                            <div>
                                <h3 className="text-gray-900 uppercase ">Contact</h3>
                                <span className="block mt-2 text-sm text-gray-800  hover:underline">
                                    +1 526 654 8965
                                </span>
                                <span className="block mt-2 text-sm text-gray-800  hover:underline">
                                    shakirmahmud50@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none " />

                <div className="text-center">
                    <p className="text-gray-700 ">© EquiSports 2024 - All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;