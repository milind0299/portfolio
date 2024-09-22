import React from 'react'
import SocialIcons from "./SocialIcons";

export default function Main({firstName, description, github, linkedin, email}) {
  return (
    <div id="main" className='w-full h-screen text-center'>
        <div className='max-w-[1024px] w-full h-full mx-auto p-2 flex items-center justify-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>{firstName}</span></h1>
                <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>{description}</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <SocialIcons github={github} linkedin={linkedin} email={email} /> 
                </div>
            </div>
        </div>
    </div>
  )
}
