import React from 'react'
// import { TextGenerateEffect } from './ui/text-generate-effect'
import { STRINGS } from '@/constants/constants'
import { projects } from '@/data/index'
// import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { PinContainer,  } from './ui/3d-pin';
// import { motion } from "motion/react";
// import { LinkPreview } from "@/components/ui/link-preview";

const recentProjects = () => {
  return (
    <div className='flex flex-col my-7' id='projects'>
        <div className='text-center text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#5a7ef3] to-[#3716f2] bg-clip-text text-transparent'>
          {STRINGS.projectsTitle}
        </div>

      <div className='grid md:grid-cols-3 sm:grid-col-1 !gap-2'>
      {[projects.map((index)=>(
        <div className="h-[40rem] w-full flex items-center justify-center " key={index.id}>
          <PinContainer
          title={index.link}
          href={index.link}
          className='!mt-2'
        
          >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {index.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-[#fafafa] ">
                {index.des}
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#719ef8] via-purple-500 to-[#2104c8]" />
          </div>
        </PinContainer>
      </div>
      ))]}
      </div>

      

{/* 
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <span className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        
      </span>
    </div> */}
  

    </div>
  )
}

export default recentProjects