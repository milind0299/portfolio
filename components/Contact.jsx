import Image from 'next/image'
import React from 'react'
import getInTouch from '@/public/assets/getintouch.jpg';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactForm from './ContactForm';
import SocialIcons from './SocialIcons';

export default function Contact({github, linkedin, email}) {

  return (
    <div id='contact' className='w-full p-2 py-16'>
        <div className='max-w-[1240px] m-auto w-full h-auto'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div className='w-full h-auto'>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={getInTouch} alt='get in touch' />
                        </div>
                        <div>
                            <h2 className='py-2'>Milind S</h2>
                            <p>Full-Stack Web Developer</p>
                            <p className='py-4'>I'm available for full-time positions. Contact me and let's talk.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
                                <SocialIcons github={github} linkedin={linkedin} email={email} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <ContactForm toemail={email} />   
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="#main">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651ef]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
