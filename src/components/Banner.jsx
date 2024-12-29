import React from 'react';
import Container from './Container';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillSlackCircle } from "react-icons/ai";
import { IoNavigateCircle } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <>
            <section className="h-auto lg:h-[400px] bg-sky-100 font-style">
                <Container>
                    <div className="flex flex-wrap lg:flex-nowrap">
                        {/* Left Section */}
                        <div className="w-full lg:w-[70%]">
                            <h4 className="text-[24px] lg:text-[32px] lg:px-0 px-3 font-bold pt-[20px] lg:pt-[40px]">
                                Find the right job
                            </h4>
                            <div className="w-full lg:w-[70%] lg:px-0 px-3 flex flex-wrap lg:flex-nowrap justify-between items-center pt-[20px] lg:pt-[30px] gap-4 lg:gap-0">
                                <div className="flex items-center text-sky-800 font-bold">
                                    <FaCheckCircle className="text-sky-800 text-[40px] lg:text-[50px] mr-2" />
                                    Live Jobs 4,808
                                </div>
                                <div className="flex items-center text-sky-800 font-bold">
                                    <FaCircleUser className="text-sky-800 text-[40px] lg:text-[50px] mr-2" />
                                    VACANCIES 21,513+
                                </div>
                                <div className="flex items-center text-sky-800 font-bold">
                                    <AiFillSlackCircle className="text-sky-800 text-[40px] lg:text-[50px] mr-2" />
                                    Companies 2,729
                                </div>
                                <div className="flex items-center text-sky-800 font-bold">
                                    <IoNavigateCircle className="text-sky-800 text-[40px] lg:text-[50px] mr-2" />
                                    New Jobs 199
                                </div>
                            </div>
                            <div className="mt-[20px] lg:mt-[30px]">
                                <div className="bg-sky-800 w-full lg:w-[97%] rounded h-[90px]">
                                    <div className="relative">
                                        <input
                                            placeholder="Search Product"
                                            className="bg-[#EFF0F5] pl-3 w-[85%] h-[35px] border-[1px] rounded border-[#f5efef] outline-none ml-[20px] mt-[30px]"
                                        />
                                        <button className="absolute text-white hover:text-white top-[48px] right-[30px] lg:right-[20px] transform -translate-y-1/2 bg-green-600 hover:bg-green-800 px-[15px] py-[6px] rounded">
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-[97%] mt-[20px] lg:mt-[30px] flex flex-wrap lg:flex-nowrap justify-between gap-2 lg:gap-0">
                                    <h4 className="hover:bg-sky-800 text-white bg-sky-600 rounded py-[4px] px-[10px] lg:px-[14px] text-center duration-300">
                                        Dhaka (770)
                                    </h4>
                                    <h4 className="hover:bg-sky-800 text-white bg-sky-600 rounded py-[4px] px-[10px] lg:px-[14px] text-center duration-300">
                                        Dhaka (770)
                                    </h4>
                                    <h4 className="hover:bg-sky-800 text-white bg-sky-600 rounded py-[4px] px-[10px] lg:px-[14px] text-center duration-300">
                                        Dhaka (770)
                                    </h4>
                                    <h4 className="hover:bg-sky-800 text-white bg-sky-600 rounded py-[4px] px-[10px] lg:px-[14px] text-center duration-300">
                                        Dhaka (770)
                                    </h4>
                                    <h4 className="hover:bg-sky-800 text-white bg-sky-600 rounded py-[4px] px-[10px] lg:px-[14px] text-center duration-300">
                                        Dhaka (770)
                                    </h4>
                                    <h4 className="hover:bg-sky-800 text-white bg-sky-600 rounded py-[4px] px-[10px] lg:px-[14px] text-center duration-300">
                                        Dhaka (770)
                                    </h4>
                                    <h4 className="hover:bg-sky-800 text-white bg-sky-600 rounded py-[4px] px-[10px] lg:px-[14px] text-center duration-300">
                                        Dhaka (770)
                                    </h4>
                                </div>

                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full lg:w-[30%] bg-sky-800 h-auto lg:h-[400px] pt-[19px] pl-[15px] text-white mt-4 lg:mt-0">
                            <h4 className="font-bold">Quick links</h4>
                            <ul className="pt-1">
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    Employer List (2727)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    New Jobs (193)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    Employer List (2727)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    New Jobs (193)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    Employer List (2727)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    New Jobs (193)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    Employer List (2727)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    New Jobs (193)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    Employer List (2727)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    New Jobs (193)
                                </li>
                                <li className="flex items-center pt-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    Employer List (2727)
                                </li>
                                <li className="flex items-center pt-2 py-2">
                                    <MdKeyboardDoubleArrowRight className="mr-2" />
                                    New Jobs (193)
                                </li>
                            </ul>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    );
};

export default Banner;
