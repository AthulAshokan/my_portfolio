import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

function ContactInfo() {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text="athulashok.developer@gmail.com" Image={HiOutlineMail} />  
      <SingleInfo text="+91 8921525022" Image={FaPhone} />  
      <SingleInfo text="India,Kerala,Kochi" Image={IoLocationOutline} />   
    </div>
  )
}

export default ContactInfo
