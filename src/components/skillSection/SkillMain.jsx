import React from 'react'
import SkillText from './SkillText'
import AllSkills from './AllSkills'
import AllSkillSM from './AllSkillSM'

function SkillMain() {
  return (
    <div id='skills'>
      <div className='max-w-[1200px] mx-auto px-4 min-h-[600px] relative overflow-hidden'>
         <SkillText/>
         <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
          <AllSkills/>
         </div>
         <div className='sm:block lg:hidden'>
          <AllSkillSM/>
         </div>
      </div>
 
    </div>
  )
}

export default SkillMain
