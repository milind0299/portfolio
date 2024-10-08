import Image from 'next/image'
import React from 'react'

export default function About({about}) {
  return (
    <div id='about' className='w-full p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 text-gray-600'>{about.para1}</p>
                <p className='py-2 text-gray-600'>{about.para2}</p>
                <a href='/#projects'>
                  <p className='py-2 text-gray-600 underline cursor-pointer'>Please checkout my latest projects</p>
                </a>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={about.profilePhoto} width={400} height={400} alt='profile_pic' />
            </div>
        </div>
    </div>
  )
}
