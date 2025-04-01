import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'


function HeroMain() {
  return (
    <div className='pt-40 pb-16'>
      <div className='flex md:flex-row sm:flex-col max-w-[1300px] mx-auto justify-center items-center relative px-4 pb-7 gap-4'>
        <HeroText/>
        <HeroPic/>
      </div>
      
            
    </div>
  )
}

export default HeroMain
