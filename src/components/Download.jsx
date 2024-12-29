import React from 'react'
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='h-[50px] w-[50px] bg-[#00000033] rounded-full text-center leading-[50px] text-white absolute right-0 lg:right-[30px] top-[38%] z-0000000050'><FaLongArrowAltRight className='inline-block' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='h-[50px] w-[50px] bg-[#00000033] rounded-full text-center leading-[50px] text-white absolute left-0 lg:left-[30px] top-[38%] z-50'><FaLongArrowAltLeft className='inline-block' /></div>
    );
}



const Download = () => {


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };


    return (
        <>

            <section className='font-style'>

                <Slider {...settings}>
                    <div className="w-[100%] h-[300px] bg-sky-800 text-center text-white">
                        <h4 className='font-bold pt-[70px] text-[40px]'>Download Bdjobs.com Android App</h4>
                        <p className='text-gray-300'> Get relevant trainings and develop yourself as a keen professional to stand out in this competitive job market. </p>
                        <div className="w-[150px] mx-auto mt-[30px]">
                            <h4 className='hover:bg-green-800 text-white bg-green-600  rounded py-[4px] duration-300 px-[14px]'>Visit Jobs</h4></div>
                    </div>
                    <div className="w-[100%] h-[300px] bg-slate-600 text-center text-white">
                        <h4 className='font-bold pt-[70px] text-[40px]'>Download Bdjobs.com Android App</h4>
                        <p className='text-gray-300'> Get relevant trainings and develop yourself as a keen professional to stand out in this competitive job market. </p>
                        <div className="w-[150px] mx-auto mt-[30px]">
                            <h4 className='hover:bg-green-800 text-white bg-green-600  rounded py-[4px] duration-300 px-[14px]'>Visit Jobs</h4></div>
                    </div>
                    <div className="w-[100%] h-[300px] bg-red-600 text-center text-white">
                        <h4 className='font-bold pt-[70px] text-[40px]'>Download Bdjobs.com Android App</h4>
                        <p className='text-gray-300'> Get relevant trainings and develop yourself as a keen professional to stand out in this competitive job market. </p>
                        <div className="w-[150px] mx-auto mt-[30px]">
                            <h4 className='hover:bg-green-800 text-white bg-green-600  rounded py-[4px] duration-300 px-[14px]'>Visit Jobs</h4></div>
                    </div>
                </Slider>

            </section>

        </>
    )
}

export default Download