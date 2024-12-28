import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='drop-shadow-md bg-white'>
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="w-[10%]">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="w-[30%] justify-end">
                            <ul className='flex justify-between items-center'>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/product"><li>About</li></Link>
                                <li>Service</li>
                                <li>Career</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Navbar
