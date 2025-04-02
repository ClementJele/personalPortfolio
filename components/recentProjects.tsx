'use client';
import React from 'react'
import { STRINGS } from '@/constants/constants'
import { projects } from '@/data/index'
import { PinContainer } from './ui/3d-pin';

const RecentProjects = () => {
  return (
    <div className='flex flex-col my-7' id='projects'>
      <div className='text-center text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#5a7ef3] to-[#3716f2] bg-clip-text text-transparent'>
        {STRINGS.projectsTitle}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
        {projects.map((project) => (
          <div className="h-[40rem] w-full flex items-center justify-center" key={project.id}>
            <PinContainer
              title={project.link}
              href={project.link}
              className='!mt-2'
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-[#fafafa]">
                    {project.des}
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#719ef8] via-purple-500 to-[#2104c8]" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects