import React, { useEffect, useState } from 'react'
import { appleImg } from '../utils'
import { searchImg } from '../utils'
import { bagImg } from '../utils'
import { menuImg } from '../utils'
import { navLists } from '../constants'
import { HiXMark } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    useGSAP(() => {
        gsap.fromTo(
            ".navItem",
            { opacity: 0, x: "-80%" },
            {

                opacity: 1,
                x: "0%",
                delay: 0.1, // Optional: Delay for a smoother start
                stagger: 0.25,
                duration: .5,
            }
        );
    }, [isOpen])
    return (
        <header className="w-full py-5 sm:px-10 px-10 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img className='cursor-pointer' src={appleImg} alt="Apple" width={18} height={18} />

                <div className='flex flex-1 justify-center max-sm:hidden '>
                    {navLists.map((navItem, index) => (
                        <div key={index} className='px-5 text-xl cursor-pointer text-gray hover:text-white transition-all'>
                            {navItem}
                        </div>
                    ))}
                </div>
                <div className={`fixed z-50 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} transition-all duration-300 top-0 left-0 right-0 bottom-0 w-full bg-black pt-6 p-8`}>
                    <div className='flex justify-between items-center mb-10'>
                        <img className='cursor-pointer' src={appleImg} alt="Apple" width={18} height={18} />
                        <div className='flex items-baseline gap-7'>
                            <img className='cursor-pointer' src={searchImg} alt="search" width={18} height={18} />
                            <img className='cursor-pointer' src={bagImg} alt="bag" width={18} height={18} />
                        </div>
                        <button onClick={() => setIsOpen(false)} className='hover:rotate-180 transition-transform duration-500 text-2xl'>
                            <HiXMark />
                        </button>
                    </div>
                    <div className='flex gap-8 flex-1 flex-col items-center'>
                        {navLists.map((navItem, index) => (
                            <div key={index} className='opacity-0 -translate-x-full navItem px-5 text-xl cursor-pointer text-white hover:text-gray transition-all'>
                                {navItem}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img className='cursor-pointer' src={searchImg} alt="search" width={18} height={18} />
                    <img className='cursor-pointer' src={bagImg} alt="bag" width={18} height={18} />
                    <button className='max-sm:block hidden' onClick={() => setIsOpen(true)}>
                        <img className='cursor-pointer' src={menuImg} alt="bag" width={20} height={20} />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
