import React from 'react'
import { FaReact } from 'react-icons/fa6'

export default function Skill({name, icon: Icon}) {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Icon size={40} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>{name}</h3>
            </div>
        </div>
    </div>
  )
}
