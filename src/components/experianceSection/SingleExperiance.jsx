import React from 'react'

function SingleExperiance({experiance}) {
  return (
    <div className='md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4 text-left'>
      <p className='font-bold  text-cyan'>{experiance.job}</p>
      <p className='text-orange '>{experiance.company}</p>
      <p className='text-lightGrey'>{experiance.date}</p>
      <ul className='list-disc mt-4 pt-4 text-white '>{experiance.responsibilities.map((item, index) => 
        <li key={index}>{item}</li>)}
      </ul>
    
    </div>
  )
}

export default SingleExperiance
