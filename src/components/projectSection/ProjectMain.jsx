import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const projects = [
  {
    name: "project1",
    year: "2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link:"#"
  },
  {
    name: "project2",
    year: "2022",
    align: "left",
    image: "../../public/images/website-img-1.jpg",
    link:"#"
  },
  {
    name: "project3",
    year: "2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link:"#"
  },
  {
    name: "project4",
    year: "2022",
    align: "left",
    image: "../../public/images/website-img-1.jpg",
    link:"#"
  },
];

function ProjectMain() {
  return (
    <div 
      id='projects'
      className='max-w-[1200px] mx-auto px-4'>
      <ProjectText/>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item, index) => (
          <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
        ))}
      </div>
      
    </div>
  )
}

export default ProjectMain
