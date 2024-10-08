import React from 'react'
import ProjectItem from './ProjectItem';

export default function Projects({projects}) {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto p-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {projects.map(element => <ProjectItem key={element._id} technologies={element.general} image = {element.imgUrl} projectTitle = {element.title} slug={element.slug} />)}
            </div>
        </div>
    </div>
  )
}
