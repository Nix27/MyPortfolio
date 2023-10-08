import React from 'react'

const ProjectCard = ({ project }) => (
    <a key={project.id} href='#' className='flex flex-col w-[90%] sm:w-[55%] lg:w-[20%] justify-between bg-dark-purple-100 rounded-[3rem] 
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
    </a>
)

export default ProjectCard