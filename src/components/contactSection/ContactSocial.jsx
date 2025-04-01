import React from 'react'
import SIngleContactSocial from './SIngleContactSocial'

import { FaGithub } from "react-icons/fa";import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
function ContactSocial() {
  return (
    <div className='flex gap-4'>
      <SIngleContactSocial Link='#' Icon={FaLinkedinIn}  />
      <SIngleContactSocial Link='#' Icon={FaGithub}  />
      <SIngleContactSocial Link='#' Icon={FiInstagram}  />
    </div>
  )
}
export default ContactSocial
