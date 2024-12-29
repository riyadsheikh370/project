import React from 'react'
import Container from "./Container"
import Logo from "../assets/logo2.jpg"
import { MdAssignmentInd } from "react-icons/md";

const Tender = () => {
    return (
        <>
            <section className='font-style bg-gray-200 py-[50px] mt-[50px]'>
                <Container>
                    <div className="">
                        <h4 className='flex items-center font-bold text-sky-800'>
                            <MdAssignmentInd />Tender/ Eoi
                        </h4>
                        {/* Flex container for cards */}
                        <div className="flex flex-wrap justify-between mt-[20px] gap-4">
                            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[31%] xl:w-[22%] 2xl:w-[18%] flex items-center bg-white h-[150px] rounded hover:shadow-lg">
                                <img className='h-[80px] w-[80px] rounded-full bg-gray-300 drop-shadow-xl ml-4' src={Logo} alt="Logo" />
                                <div className="pr-3">
                                    <h4 className='text-pink-800 pl-[30px]'>Society for Assistance</h4>
                                    <p className='pl-[30px] text-gray-700'>
                                        Executive (Sales & Marketing)
                                        Content Creator
                                    </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[31%] xl:w-[22%] 2xl:w-[18%] flex items-center bg-white h-[150px] rounded hover:shadow-lg">
                                <img className='h-[80px] w-[80px] rounded-full bg-gray-300 drop-shadow-xl ml-4' src={Logo} alt="Logo" />
                                <div className="pr-3">
                                    <h4 className='text-pink-800 pl-[30px]'>Society for Assistance</h4>
                                    <p className='pl-[30px] text-gray-700'>
                                        Executive (Sales & Marketing)
                                        Content Creator
                                    </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[31%] xl:w-[22%] 2xl:w-[18%] flex items-center bg-white h-[150px] rounded hover:shadow-lg">
                                <img className='h-[80px] w-[80px] rounded-full bg-gray-300 drop-shadow-xl ml-4' src={Logo} alt="Logo" />
                                <div className="pr-3">
                                    <h4 className='text-pink-800 pl-[30px]'>Society for Assistance</h4>
                                    <p className='pl-[30px] text-gray-700'>
                                        Executive (Sales & Marketing)
                                        Content Creator
                                    </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[31%] xl:w-[22%] 2xl:w-[18%] flex items-center bg-white h-[150px] rounded hover:shadow-lg">
                                <img className='h-[80px] w-[80px] rounded-full bg-gray-300 drop-shadow-xl ml-4' src={Logo} alt="Logo" />
                                <div className="pr-3">
                                    <h4 className='text-pink-800 pl-[30px]'>Society for Assistance</h4>
                                    <p className='pl-[30px] text-gray-700'>
                                        Executive (Sales & Marketing)
                                        Content Creator
                                    </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[31%] xl:w-[22%] 2xl:w-[18%] flex items-center bg-white h-[150px] rounded hover:shadow-lg">
                                <img className='h-[80px] w-[80px] rounded-full bg-gray-300 drop-shadow-xl ml-4' src={Logo} alt="Logo" />
                                <div className="pr-3">
                                    <h4 className='text-pink-800 pl-[30px]'>Society for Assistance</h4>
                                    <p className='pl-[30px] text-gray-700'>
                                        Executive (Sales & Marketing)
                                        Content Creator
                                    </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[31%] xl:w-[22%] 2xl:w-[18%] flex items-center bg-white h-[150px] rounded hover:shadow-lg">
                                <img className='h-[80px] w-[80px] rounded-full bg-gray-300 drop-shadow-xl ml-4' src={Logo} alt="Logo" />
                                <div className="pr-3">
                                    <h4 className='text-pink-800 pl-[30px]'>Society for Assistance</h4>
                                    <p className='pl-[30px] text-gray-700'>
                                        Executive (Sales & Marketing)
                                        Content Creator
                                    </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[31%] xl:w-[22%] 2xl:w-[18%] flex items-center bg-white h-[150px] rounded hover:shadow-lg">
                                <img className='h-[80px] w-[80px] rounded-full bg-gray-300 drop-shadow-xl ml-4' src={Logo} alt="Logo" />
                                <div className="pr-3">
                                    <h4 className='text-pink-800 pl-[30px]'>Society for Assistance</h4>
                                    <p className='pl-[30px] text-gray-700'>
                                        Executive (Sales & Marketing)
                                        Content Creator
                                    </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[31%] xl:w-[22%] 2xl:w-[18%] flex items-center bg-white h-[150px] rounded hover:shadow-lg">
                                <img className='h-[80px] w-[80px] rounded-full bg-gray-300 drop-shadow-xl ml-4' src={Logo} alt="Logo" />
                                <div className="pr-3">
                                    <h4 className='text-pink-800 pl-[30px]'>Society for Assistance</h4>
                                    <p className='pl-[30px] text-gray-700'>
                                        Executive (Sales & Marketing)
                                        Content Creator
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Tender
