
"use client"
import React from 'react'
import { STRINGS } from '@/constants/constants'
// import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Image from 'next/image';
import  Logo  from "@/images/logo.png"
import { Button } from './ui/button';


const Services = () => {
  return (
    <div id='services' className='flex flex-col gap-2 items-center justify-center'>
        <div className="text-4xl md:text-7xl font-bold relative z-20 bg-gradient-to-r from-[#5a7ef3] to-[#3716f2] bg-clip-text text-transparent mb-6">
          {STRINGS.servicesTitle}
        </div>

        <div className='flex flex-row px-5 sm:px-3 justify-center items-center'>

          <div className="hidden h-[40rem] md:flex flex-1 items-center justify-center md:flex-col  rounded-lg ">
            {/* <TextHoverEffect text="Contact" />
            <TextHoverEffect text="Me" /> */}

            <Image src={Logo} alt='logo' height={1600} width={1400} className='rounded-md sm:hidden md:flex'/>

          </div>

          <div className='flex md:flex-1 justify-center items-center'>
                <div className='flex flex-col p-3 gap-4'>
                    <p>
                      I am always open to new opportunities. Let us talk.
                    </p>
                    <div className='flex flex-col md:flex-row sm:flex-col gap-4 md:gap-2 sm:gap-4 justify-center items-center'>
                      <input placeholder='Name' type='text'  className='bg-blue-500 rounded-md h-14 px-2 text-white w-full'/>
                      <input placeholder='Last Name' className='bg-blue-500 rounded-md h-14 px-2 text-white w-full'/>
                    </div>

                    <div className='w-full'>
                      <input placeholder='Email'  type='email' className='bg-blue-500 rounded-md h-14 w-full px-2 text-white'/>
                    </div>

                      <div className='text-[#fafafa] w-full max-w-[500px]'>
                      <textarea 
                        placeholder='Message' 
                        className='
                          bg-blue-500 
                          rounded-md 
                          h-[120px] 
                          w-full 
                          px-2 
                          py-2 
                          text-white 
                          text-start
                          border-blue-600
                          resize-none
                          overflow-y-auto
                          whitespace-normal
                          break-words
                        '
                        style={{
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      />
                    </div>

                    <Button className='flex justify-center items-center bg-gradient-to-tr from-[#3e44dfaa] to-[#3d6bf5aa] text-[#fafafa]'>
                      Submit
                    </Button>
                    
                </div>
          </div>

        </div>

        
    </div>

  )
}

export default Services