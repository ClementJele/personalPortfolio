
'use client';
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            
            {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName}) => (
                <BentoGridItem 
                title={title} 
                key={id} 
                id={id} 
                description={description} 
                className={className}
                img= {img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid