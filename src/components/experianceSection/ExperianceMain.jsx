import React from 'react'
import ExperianceText from './ExperianceText'
import ExperianceTop from './ExperianceTop'
import AllExperianceMain from './AllExperianceMain'

function ExperianceMain() {
  return (
    <div id='experiance' className='max-w-[1200px] mx-auto px-4 '>
      <ExperianceText/>
      <ExperianceTop/>
      <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
      <AllExperianceMain/>  
    </div>
  )
}

export default ExperianceMain
