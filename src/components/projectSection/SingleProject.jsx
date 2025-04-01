import React from 'react'
import { BiRightTopArrowCircle } from "react-icons/bi";

function SingleProject({name, year, align, image, link}) {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 
       ${ align === "left" ? "md:flex-row" : "md:flex-row-reverse" } 
        justify-end `}>
      
      <div>
        <h2 className='md:text-3xl sm:text-2xl text-orange'>{name}</h2>
        <h2 className={`text-xl font-thin text-white font-special sm:text-center 
          ${ align === "left" ? "md:text-right" : "md:text-left" } `}>{year}</h2>
        <a href={link} className={` text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 ${ align === "left" ? "md:justify-self-end" : "md:justify-self-start"} `}>
          View
          <BiRightTopArrowCircle/>
        </a>

      </div>
      <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-500 relative border border-white '>
        <div className='absolute top-0 left-0 w-full h-full bg-cyan opacity-50 hover:opacity-0 duration-500 md:block sm:hidden '></div>
        <img src={image} alt={name} className='w-full h-full'  />
      </div>
      
    </div>
  )
}

export default SingleProject
