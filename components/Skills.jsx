import Image from 'next/image'
import { FaAngular, FaDrupal, FaGithub, FaJava, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import React from 'react'
import Skill from './Skill';

export default function Skills({skills}) {
  
  const iconComponents = {
    FaReact: FaReact,
    FaAngular: FaAngular,
    FaDrupal: FaDrupal,
    FaLaravel: FaLaravel,
    FaJava: FaJava,
    FaJs: FaJs,
    RiNextjsFill: RiNextjsFill,
    FaPhp: FaPhp,
    SiMysql: SiMysql,
    DiMongodb: DiMongodb,
    FaGithub: FaGithub,
  };

  return (
    <div id='skills' className='w-full p-2 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
              {skills.map(element => <Skill key={element._id} name={element.skill} icon={iconComponents[element.icon]} />)}
            </div>
        </div>
    </div>
  )
}
