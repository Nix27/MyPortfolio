import React from 'react'
import SectionTitle from './SectionTitle'
import { projectsSection } from '../content'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col mt-14'>
      <SectionTitle title={projectsSection.title} />

      <div className='flex flex-col items-center md:flex-row md:justify-center md:gap-5 lg:gap-10 gap-4 mx-0 md:mx-10 lg:mx-0'>
        {projectsSection.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}

export default Projects