"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import   MagicButton from '../ui/magicButton'
import { IoCopyOutline } from "react-icons/io5";
import { STRINGS } from '@/constants/constants'


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
  spareImg,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string


}) => {
const [copied, setCopied] = useState(false);
const handleCopy = () => {
  navigator.clipboard.writeText(STRINGS.email)
  setCopied(true)
}

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex relative flex-col space-y-4 border-gray-400",
        className
      )}

      style={{
        background: 'rgb(3,7,33)',
        backgroundColor: 'linear-gradient(90deg, rgba(3,7,33,1) 34%, rgba(94,2,71,1) 73%)'}}
    >

      <div className={`${id === 6 && 'flex justify-center'} h-full`}>

        <div className="w-full h-full absolute">
          {img && (
            <img src={img} alt={img} className={cn(imgClassName, 'object-cover', 'object-center')}/>
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full h-full opacity-80'}`}>
            {spareImg && (
              <img
              src={spareImg} alt={spareImg} className={'object-cover object-center w-full h-full'}
              />
            )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}
        {/*  break these things down*/}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-300 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          {/* break this into another component */}
          <div className="justify-between z-10 ">
              <div className="font-sans font-light text-sm text-[#c1c2d3] dark:text-neutral-200 mb-2 mt-2 md:text-xs lg:text-base z-10">
                {description}
              </div>

              <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
              {title}
            </div>

          </div>
          
        

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-2 lg:-right-2 justify-between ">
            <div className="flex flex-col gap-1 lg:gap-2 -left-3 justify-between">
              {['React.js', 'Next.js', 'TypeScript', 'Aceternity'].map((i) => (
                <span key={i} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E]">
                    {i}
                </span>
              ))}

              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e] "/>
            </div>

            
          </div>
        )}

        {id===5 && (
          <BackgroundGradientAnimation>
          <div className="absolute  flex items-center justify-center text-white font-bold"/>
        </BackgroundGradientAnimation>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0 z-100`}>
              <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}/>
            </div>

            <MagicButton 
            title={copied? 'Email Copied' : 'Copy Email'}
            icon={<IoCopyOutline/>}
            position='left'
            classes="`bg-[#161a31] `"
            handleClick={handleCopy}
            />
          </div>
          
        )}
        
      </div>
      
    </div>

    </div>
  );
};
