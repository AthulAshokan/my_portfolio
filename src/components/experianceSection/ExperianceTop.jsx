import React from 'react'
import ExperianceTopLeft from './ExperianceTopLeft'
import ExperianceTopMiddle from './ExperianceTopMiddle'
import ExperianceTopRight from './ExperianceTopRight'

function ExperianceTop() {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-4 items-center justify-center'>
      <ExperianceTopLeft/>
      <ExperianceTopMiddle/>
      <ExperianceTopRight/>
      
    </div>
  )
}

export default ExperianceTop
