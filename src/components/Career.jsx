import React from 'react'
import Container from "./Container"
import CareerImg from "../assets/career.jpeg"
import { LuSquareKanban } from "react-icons/lu";
import { FaSchool } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";


const Career = () => {
    return (
        <>
            <section className='font-style py-[50px]'>
                <Container>
                    <img className='w-[100%]' src={CareerImg} alt="" />
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-[30px]">
                        <div className="w-full lg:w-[48%] bg-gray-300 py-[50px] drop-shadow-2xl">
                            <h4 className='text-[25px] text-sky-800 font-bold pl-[30px] uppercase'>Daylong Training</h4>
                            <div className="pt-[30px] px-[30px]">
                                <div className="flex items-center"><LuSquareKanban className='text-lime-950 text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center py-4"><FaSchool className='text-[red] text-[50px] pr-3' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center"><FaTshirt className='text-[blue] text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center py-4"><LiaCertificateSolid className='text-orange-500 text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center"><LuSquareKanban className='text-lime-950 text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center py-4"><FaSchool className='text-[red] text-[50px] pr-3' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center"><FaTshirt className='text-[blue] text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center py-4"><LiaCertificateSolid className='text-orange-500 text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[48%] bg-gray-300 py-[50px] rounded drop-shadow-2xl">
                            <h4 className='text-[25px] text-sky-800 font-bold pl-[30px] uppercase'>Evening Courses</h4>
                            <div className="pt-[30px] px-[30px]">
                                <div className="flex items-center"><FaSchool className='text-green-950 text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center py-4"><LuSquareKanban className='text-[red] text-[50px] pr-3' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center"><FaTshirt className='text-[blue] text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center py-4"><LiaCertificateSolid className='text-orange-500 text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center"><LuSquareKanban className='text-lime-950 text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center py-4"><FaSchool className='text-[red] text-[50px] pr-3' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center"><FaTshirt className='text-[blue] text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                                <div className="flex items-center py-4"><LiaCertificateSolid className='text-orange-500 text-[50px] pr-2' />Incoterms, H.S Code, Insurance and LC Management in International Business</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Career;
