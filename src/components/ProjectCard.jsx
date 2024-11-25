import React, { useState } from 'react'
import ProjectDialog from './ProjectDialog'

const ProjectCard = ({ project }) => {
  
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleToggleDialog = () => {
    setIsDialogOpen(prev => !prev)

    if (isDialogOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }

  }

  return (
    <>
      <button key={project.id} onClick={handleToggleDialog} className='flex flex-col w-[90%] sm:w-[55%] lg:w-[20%] justify-between items-start bg-dark-purple-100 text-left rounded-[3rem] 
          p-3 gap-2 transition-all hover:scale-90'>
        <div className='h-[220px] overflow-hidden self-center rounded-[2.5rem]'>
            <img src={project.projectImage} alt={project.imageDesc} />
        </div>

        <p className='text-primary-white ml-3'>{project.title}</p>

        <div className='flex justify-between mx-3'>
            <div className='flex items-center gap-1'>
                {project.techStack.map(image => (
                  <div key={image.id} className='w-[25px]'>
                    <img src={image.image} alt={image.desc} />
                  </div>
                ))}
            </div>
        </div>
      </button>
      {isDialogOpen && <ProjectDialog project={project} handleToggleDialog={handleToggleDialog} />}
    </>

)}

export default ProjectCard