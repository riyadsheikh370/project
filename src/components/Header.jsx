import React from 'react'
import Container from './Container'
import { FaYoutube, FaFacebookF, FaGoogle, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <section className='bg-slate-800 h-[50px] items-center font-style'>
                <Container>
                    <div className="flex justify-between h-[50px] items-center ">
                        <div className="w-[50%] items-center flex justify-between text-[15px]">
                            <div className="w-[10%] text-white">
                                <h4 className='bg-indigo-600 py-[14px] px-[15px]'>Jobs</h4>
                            </div>
                            <ul className='w-[50%] flex justify-between text-white'>
                                <li className='hover:bg-green-800 ... px-3 py-[14px] duration-300'>My Bdjobs</li>
                                <li className='hover:bg-pink-800 ... px-3 py-[14px] duration-300'>E-LEARNING</li>
                                <li className='hover:bg-orange-800 ... px-3 py-[14px] duration-300'>Tender/Eoi</li>
                            </ul>
                            <div className="w-[15%] text-white">
                                <h4 className='bg-violet-700 rounded py-[4px] px-[15px]'>Recruiter</h4>
                            </div><div className="w-[18%] text-white">
                                <h4 className='bg-green-900 rounded py-[4px] px-[15px]'>POST A JOB</h4>
                            </div>
                        </div>
                        <div className="flex justify-between w-[25%] items-center text-white">
                            <a href="https://www.youtube.com"><div className="hover:bg-green-800 ... px-3 py-[16px] duration-300"><FaYoutube className='text-[18px]' /></div></a>
                            <a href="https://www.facebook.com/"><div className="hover:bg-pink-800 ... px-3 py-[17px] duration-300"><FaFacebookF /></div></a>
                            <a href="https://www.google.com/"><div className="hover:bg-blue-800 ... px-3 py-[17px] duration-300"><FaGoogle /></div></a>
                            <a href="https://www.linkedin.com/"><div className="hover:bg-red-800 ... px-3 py-[17px] duration-300"><FaLinkedinIn /></div></a>
                            <a href="https://www.instagram.com/"><div className="hover:bg-purple-800 ... px-3 py-[17px] duration-300"><FaInstagram /></div></a>
                            <div className="w-[37%] rounded text-end flex justify-between items-center p-[3px] text-[15px] bg-white">

                                <div className="text-black">English</div>
                                <div className="p-[2px] bg-black rounded text-white">Bangla</div>

                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Header
