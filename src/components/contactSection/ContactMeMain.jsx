import React from 'react'
import ContactMeRight from './ContactMeRight'
import ContactMeLeft from './contactMeLeft'

function ContactMeMain() {
  return (
    <div 
      id='contact'
      className='max-w-[1200px] mx-auto px-4 justify-center items-center mt-[100px]'>
      <h2 className='text-6xl text-cyan mb-10 text-center'>ContactMe</h2>
      <div className='flex justify-between gap-24 bg-brown p-8 rounded-xl lg:flex-row sm:flex-col'>
        <ContactMeLeft/>
        <ContactMeRight/>
      </div>
    </div>
  )
}

export default ContactMeMain
