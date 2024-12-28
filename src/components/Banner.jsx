import React from 'react'
import Container from './Container'
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillSlackCircle } from "react-icons/ai";
import { IoNavigateCircle } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <>
            <section className='h-[400px] bg-sky-100 font-style'>
                <Container>
                    <div className="flex">
                        <div className="w-[70%]">
                            <h4 className='text-[32px] font-bold pt-[40px]'>Find the right job</h4>
                            <div className="w-[70%] flex justify-between items-center pt-[30px]">
                                <div className="flex text-sky-800 font-bold"><FaCheckCircle className='text-sky-800 text-[50px]' />Live Jobs 4,808</div>
                                <div className="flex text-sky-800 font-bold"><FaCircleUser className='text-sky-800 text-[50px]' />VACANCIES 21,513+</div>
                                <div className="flex text-sky-800 font-bold"><AiFillSlackCircle className='text-sky-800 text-[50px]' />Companies 2,729</div>
                                <div className="flex text-sky-800 font-bold"><IoNavigateCircle className='text-sky-800 text-[50px]' />New Jobs 199</div>
                            </div>
                            <div className="">
                                <div className="bg-sky-800 w-[97%] rounded h-[90px] mt-[30px]">
                                    <div className="relative">
                                        <input
                                            placeholder='Search Product'
                                            className='bg-[#EFF0F5] pl-3 w-[85%] h-[35px] border-[1px] rounded border-[#f5efef] outline-none ml-[20px] mt-[30px]'
                                        />
                                        <div className="absolute text-sky-800 hover:text-white top-[47%] right-[20px] bg-green-600 hover:bg-green-800 px-[15px] py-[6px] rounded">
                                            Search
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[97%] mt-[30px] flex justify-between">
                                    <h4 className='hover:bg-sky-800 text-white bg-sky-600  rounded py-[4px] duration-300 px-[14px]'>Dhaka (770)</h4>
                                    <h4 className='hover:bg-sky-800 text-white bg-sky-600  rounded py-[4px] duration-300 px-[14px]'>Dhaka (770)</h4>
                                    <h4 className='hover:bg-sky-800 text-white bg-sky-600  rounded py-[4px] duration-300 px-[14px]'>Dhaka (770)</h4>
                                    <h4 className='hover:bg-sky-800 text-white bg-sky-600  rounded py-[4px] duration-300 px-[14px]'>Dhaka (770)</h4>
                                    <h4 className='hover:bg-sky-800 text-white bg-sky-600  rounded py-[4px] duration-300 px-[14px]'>Dhaka (770)</h4>
                                    <h4 className='hover:bg-sky-800 text-white bg-sky-600  rounded py-[4px] duration-300 px-[14px]'>Dhaka (770)</h4>
                                    <h4 className='hover:bg-sky-800 text-white bg-sky-600  rounded py-[4px] duration-300 px-[14px]'>Dhaka (770)</h4>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%] bg-sky-800 h-[400px] pt-[19px] pl-[15px] text-white">
                            <h4 className='font-bold'>Quick links</h4>
                            <div className="">
                                <ul>
                                    <li className='flex items-center pt-3'><MdKeyboardDoubleArrowRight />Employer List (2727)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight /> New Jobs (193)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight />Employer List (2727)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight /> New Jobs (193)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight />Employer List (2727)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight /> New Jobs (193)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight />Employer List (2727)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight /> New Jobs (193)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight />Employer List (2727)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight /> New Jobs (193)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight />Employer List (2727)</li>
                                    <li className='flex items-center'><MdKeyboardDoubleArrowRight /> New Jobs (193)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner
