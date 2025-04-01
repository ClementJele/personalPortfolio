"use client";
// import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { STRINGS } from '../constants/constants'
import   MagicButton from './ui/magicButton'
import { GoArrowUpRight } from "react-icons/go";


const Hero = () => {
  return (
    <div className='pb-20 pt-16' id='/home'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='blue' />
            <Spotlight className='top-14 left-80 h-[80vh] w-[50vw]' fill='blue' />
            <Spotlight className='top-14 -left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>

       <div>

       <div className="h-full w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.4] relative flex items-center justify-center  flex-col  top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "/>
            {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Backgrounds
            </p> */}

            <div className='flex justify-center relative my-20 z-10  flex-col items-center max-w-[88vw]'>
                <div className='max-w-[89vh] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase  tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        {STRINGS.heroSubTitle}
                    </h2>
                </div>
                
                <div className="lg:text-6xl font-bold relative z-20 bg-[#bca9f9aa] bg-clip-text text-transparent" > 
                {STRINGS.heroTitle}   
                </div>
                
                <h2 className="uppercase  tracking-widest md:tracking-wider font-bold text-sm md:text-lg lg:text-1xl text-center text-blue-100 max-w-90 py-4">
                    {STRINGS.heroIntro}
                </h2>

                <a href="#about">
                    <MagicButton 
                    
                    title={STRINGS.magicButtonText}
                    icon={<GoArrowUpRight/>}
                    position='right'
                    />
                 
                </a>
                
            </div>
        </div>

       </div>
    </div>
  )
}

export default Hero