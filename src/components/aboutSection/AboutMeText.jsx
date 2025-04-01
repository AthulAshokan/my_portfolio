import React from 'react'

function AboutMeText() {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10' >About Me</h2>
      <p className='text-white'>
        Lorem ipsum dolor, sit amet con nemo minus hic quam ab exercitationem optio qui! Architecto illum molestias eos culpa error dolore, fugiat sed! Earum aliquid assumenda accusantium aliquam ipsum est sequi ab aperiam dignissimos, ipsam alias sed neque tempore ad. Labore minus ipsam velit minima possimus iusto fugit reiciendis voluptate magnam consequuntur, quae animi ratione saepe qui quibusdam hic placeat omnis necessitatibus exercitationem. Corporis deserunt omnis, nostrum voluptatibus dolor earum praesentium quia?
      </p>
      <button  className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 coursor-pointer md:start-center text-white hover:text-cyan'>
        My Projects
      </button>
    </div>
  )
}

export default AboutMeText
