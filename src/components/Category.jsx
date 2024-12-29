import React from 'react';
import Container from './Container';
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineAlignLeft } from "react-icons/ai";

const Category = () => {
    return (
        <>
            <section className="font-style bg-gray-200 h-auto lg:h-[400px]">
                <Container>
                    <div className="bg-white w-full h-auto lg:h-[380px] pt-[19px] text-gray-600 pl-[15px] rounded drop-shadow-2xl">
                        <h4 className="font-bold flex items-center mb-4">
                            <AiOutlineAlignLeft className="mr-2" /> Browse Category
                        </h4>
                        <div className="flex flex-wrap lg:flex-nowrap justify-between">
                            {/* Column 1 */}
                            <ul className="w-full lg:w-[30%] mb-4 lg:mb-0">
                                <li className="flex items-center pt-3"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Issue new licenses, renewals, and amendments.</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs (193)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs, and amendments. (193)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs (193)</li>
                            </ul>

                            {/* Column 2 */}
                            <ul className="w-full lg:w-[30%] mb-4 lg:mb-0">
                                <li className="flex items-center pt-3"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs (193)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs (193)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Issue new licenses.</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs (193)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Issue new licenses, renewals. (193)</li>
                            </ul>

                            {/* Column 3 */}
                            <ul className="w-full lg:w-[30%]">
                                <li className="flex items-center pt-3"><IoIosArrowForward className="mr-2" /> Issue new licenses. (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Issue new licenses, renewals.</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs (193)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Employer List (2727)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs (193)</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> Issue new</li>
                                <li className="flex items-center"><IoIosArrowForward className="mr-2" /> New Jobs (193)</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Category;
