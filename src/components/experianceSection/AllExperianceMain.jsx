import React from 'react'
import SingleExperiance from './SingleExperiance'
import { FaArrowRight } from "react-icons/fa";

const experiance = [
  {
    job: "Frontend Developer",
    company: "Company name",
    date: '2022-2023',
    responsibilities: [
      "implementing reusable components",
      "working on the UI/UX",      
      "working on the UI/UX",
      "some point add there in this section some issue i tell theat for  ",
    ],
  },
  {
    job: "Frontend Developer",
    company: "Company name",
    date: '2022-2023',
    responsibilities: [
      "implementing reusable components",
      "working on the UI/UX",      
      "working on the UI/UX",
    ],
  },
  {
    job: "Frontend Developer",
    company: "Company name",
    date: '2022-2023',
    responsibilities: [
      "implementing reusable components",
      "working on the UI/UX",      
      "working on the UI/UX",
    ],
  },
]

function AllExperianceMain() {
  return (
    <div className='flex md:flex-row  sm:flex-col items-center justify-between gap-x-4'>
      {
        experiance.map((items, index) => {
          return(
            <>
            <SingleExperiance key={index} experiance={items} />
            { index<2 ? <FaArrowRight className='text-6xl text-orange lg:block sm:hidden  '/> :""}
            </>
          )
        })
      }
      
    </div>
  )
}

export default AllExperianceMain
