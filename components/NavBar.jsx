"use client";

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import React, { useEffect, useState } from 'react'

export default function NavBar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleSadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener("scroll", handleSadow)
    }, [])

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-white/95" : "fixed w-full h-20 z-[100] bg-white"}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Image src="/assets/logo.png" alt='logo' width={80} height={80} />
            <div>
                <ul className='hidden md:flex'>
                    <Link href="/#main">
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>
                    <Link href="/#about">
                        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link>
                    <Link href="/#skills">
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link>
                    <Link href="/#projects">
                        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </Link>
                </ul>
            </div>
            <div className='md:hidden'>
                <AiOutlineMenu onClick={handleClick} size={25} />
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300' : 'fixed left-[-100%] h-screen top-0 ease-in duration-300'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src="/assets/mobile_logo.png" alt='logo' width={80} height={80} />
                        <div onClick={handleClick} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-black/20 my-4'>
                        <p className='w-[85%] py-4'>Let's build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/">
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href="/">
                            <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href="/">
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href="/">
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href="/">
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className='pt-40'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
