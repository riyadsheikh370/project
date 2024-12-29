import React from 'react';
import Container from "./Container";
import Logo from "../assets/logo1.png";
import { BsFire } from "react-icons/bs";

const Hotjobs = () => {
    return (
        <section className="font-style">
            <Container>
                <h4 className="flex items-center font-bold text-sky-800 mt-[50px]">
                    <BsFire className="text-[red] mr-2" /> Hot Jobs
                </h4>
                <div className="flex flex-wrap lg:justify-between gap-4 mt-[20px]">
                    <div className="w-full sm:w-[48%] md:w-[30%] xl:w-[22%] flex items-center border border-gray-400 h-[150px] bg-white shadow-md rounded">
                        <img
                            className="h-[100px] w-[100px] rounded drop-shadow-md bg-white ml-4"
                            src={Logo}
                            alt="Job Logo"
                        />
                        <div className="pr-3">
                            <h4 className="text-sky-800 pl-[10px]">Osonkho.com</h4>
                            <p className="pl-[10px] text-gray-700">
                                Executive (Sales & Marketing) <br />
                                Content Creator
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%] md:w-[30%] xl:w-[22%] flex items-center border border-gray-400 h-[150px] bg-white shadow-md rounded">
                        <img
                            className="h-[100px] w-[100px] rounded drop-shadow-md bg-white ml-4"
                            src={Logo}
                            alt="Job Logo"
                        />
                        <div className="pr-3">
                            <h4 className="text-sky-800 pl-[10px]">Osonkho.com</h4>
                            <p className="pl-[10px] text-gray-700">
                                Executive (Sales & Marketing) <br />
                                Content Creator
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%] md:w-[30%] xl:w-[22%] flex items-center border border-gray-400 h-[150px] bg-white shadow-md rounded">
                        <img
                            className="h-[100px] w-[100px] rounded drop-shadow-md bg-white ml-4"
                            src={Logo}
                            alt="Job Logo"
                        />
                        <div className="pr-3">
                            <h4 className="text-sky-800 pl-[10px]">Osonkho.com</h4>
                            <p className="pl-[10px] text-gray-700">
                                Executive (Sales & Marketing) <br />
                                Content Creator
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%] md:w-[30%] xl:w-[22%] flex items-center border border-gray-400 h-[150px] bg-white shadow-md rounded">
                        <img
                            className="h-[100px] w-[100px] rounded drop-shadow-md bg-white ml-4"
                            src={Logo}
                            alt="Job Logo"
                        />
                        <div className="pr-3">
                            <h4 className="text-sky-800 pl-[10px]">Osonkho.com</h4>
                            <p className="pl-[10px] text-gray-700">
                                Executive (Sales & Marketing) <br />
                                Content Creator
                            </p>
                        </div>
                    </div>
                  
                </div>
            </Container>
        </section>
    );
};

export default Hotjobs;
