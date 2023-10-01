import React from 'react'
import SectionTitle from './SectionTitle'
import { projectsSection } from '../content'

const Projects = () => {
  return (
    <section className='flex flex-col'>
      <SectionTitle title={projectsSection.title} />

      <div className='flex flex-col gap-4'>
        {projectsSection.projects.map(project => (
          <div key={project.id} className='flex flex-col h-[300px] justify-between bg-dark-purple-100 rounded-[3rem] p-2'>
            <div className='h-[220px] overflow-hidden self-center'>
              <img src={project.projectImage} alt={project.imageDesc} className='rounded-[3rem]' />
            </div>

            <p className='text-primary-white font-bold ml-3'>{project.title}</p>

            <div className='flex justify-between mx-3'>
              <div className='flex items-center gap-1'>
                {project.techStack.map(image => (
                  <div key={image.id} className='w-[25px]'>
                    <img src={image.image} alt={image.desc} />
                  </div>
                ))}
              </div>

              <div className='w-[25px]'>
                  <img src={project.github.image} alt={project.github.desc} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects