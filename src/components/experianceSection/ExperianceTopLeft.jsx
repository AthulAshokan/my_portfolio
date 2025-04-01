import React from 'react'
import ExperianceInfo from './ExperianceInfo'

function ExperianceTopLeft() {
  return (
    <div className='flex flex-col gap-6 w-[300px] ' >
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2025</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperianceInfo number="3" text="Years"/>
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <ExperianceInfo number="23" text="Websites"/>
      </div>
      <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit ipsumo asperiorinima dolor omnis!</p>
      <ExperianceInfo number="$100" text="Max Budget" />
    </div>
    
  )
}

export default ExperianceTopLeft
