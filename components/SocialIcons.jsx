import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function SocialIcons({ github, linkedin, email }) {
    const mailto = `mailto:${email}`;
  return (
    <>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaLinkedinIn />
        </div>
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaGithub />
        </div>
      </a>
      <a href={mailto} target="_blank">
        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail />
        </div>
      </a>
      <a href='/#contact'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsFillPersonLinesFill />
        </div>
      </a>
    </>
  );
}
