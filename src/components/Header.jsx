import React from 'react';
import Container from './Container';
import { FaYoutube, FaFacebookF, FaGoogle, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <section className="bg-slate-800 h-auto lg:h-[50px] flex items-center font-style">
                <Container>
                    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
                        {/* Left Section */}
                        <div className="w-full lg:w-[50%] flex flex-wrap lg:flex-nowrap items-center justify-between text-[15px] mb-2 lg:mb-0">
                            {/* Jobs Section */}
                            <div className="w-auto text-white">
                                <h4 className="bg-indigo-600 py-2 px-4 lg:py-[14px] lg:px-[15px] lg:ml-0 ml-[150px] text-center">Jobs</h4>
                            </div>
                            {/* Navigation Links */}
                            <ul className="flex w-full lg:w-[50%] justify-between text-white">
                                <li className="hover:bg-green-800 px-3 py-2 lg:py-[14px] duration-300 text-center">My Bdjobs</li>
                                <li className="hover:bg-pink-800 px-3 py-2 lg:py-[14px] duration-300 text-center">E-LEARNING</li>
                                <li className="hover:bg-orange-800 px-3 py-2 lg:py-[14px] duration-300 text-center">Tender/Eoi</li>
                            </ul>
                            {/* Recruiter & Post Job */}
                            <div className="flex gap-2 mt-2 lg:mt-0 lg:mx-0 mx-[20%]">
                                <h4 className="bg-violet-700 rounded py-1 text-white px-4 lg:py-[4px] lg:px-[15px] text-center">Recruiter</h4>
                                <h4 className="bg-green-900 rounded py-1 px-4 text-white lg:py-[4px] lg:px-[15px] text-center">POST A JOB</h4>
                            </div>
                        </div>
                        {/* Right Section */}
                        <div className="w-full lg:w-[25%] flex justify-between items-center text-white">
                            {/* Social Links */}
                            <a href="https://www.youtube.com" className="hover:bg-green-800 px-3 py-2 lg:py-[16px] duration-300">
                                <FaYoutube className="text-[18px]" />
                            </a>
                            <a href="https://www.facebook.com/" className="hover:bg-pink-800 px-3 py-2 lg:py-[17px] duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.google.com/" className="hover:bg-blue-800 px-3 py-2 lg:py-[17px] duration-300">
                                <FaGoogle />
                            </a>
                            <a href="https://www.linkedin.com/" className="hover:bg-red-800 px-3 py-2 lg:py-[17px] duration-300">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.instagram.com/" className="hover:bg-purple-800 px-3 py-2 lg:py-[17px] duration-300">
                                <FaInstagram />
                            </a>
                            {/* Language Toggle */}
                            <div className="flex gap-1 bg-white rounded p-1 lg:p-[3px]">
                                <div className="text-black px-2">English</div>
                                <div className="bg-black text-white px-2 rounded">Bangla</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Header;
