import React from 'react';
import Container from './Container';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="drop-shadow-md bg-white">
                <Container>
                    <div className="flex justify-between items-center flex-wrap lg:flex-nowrap py-2">
                        {/* Logo Section */}
                        <div className="w-[50%] lg:w-[10%]">
                            <img src={Logo} alt="Logo" className="max-w-full h-auto lg:mx-0 mx-[90px]" />
                        </div>
                        {/* Menu Items */}
                        <div className="w-full lg:w-[30%] flex justify-end mt-2 lg:mt-0">
                            <ul className="flex flex-wrap lg:flex-nowrap lg:mr-0 mr-[14%] justify-evenly  lg:justify-between items-center gap-4 lg:gap-0 text-gray-700 text-sm lg:text-base">
                                <Link to="/"><li className="hover:text-blue-500 transition lg:pr-4 duration-300">Home</li></Link>
                                <Link to="/product"><li className="hover:text-blue-500 lg:pr-4 transition duration-300">About</li></Link>
                                <li className="hover:text-blue-500 transition lg:pr-4 duration-300">Service</li>
                                <li className="hover:text-blue-500 transition lg:pr-4 duration-300">Career</li>
                                <li className="hover:text-blue-500 transition  duration-300">Contact</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default Navbar;
