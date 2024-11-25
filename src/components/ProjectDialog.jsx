import React from 'react'
import LinkButton from './LinkButton'
import { googlePlayBadge, appStoreBadge, githubLogo, projectLive, close } from '../assets'

const ProjectDialog = ({ project, handleToggleDialog }) => {
  return (
    <div className='bg-transparent-dark fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-dark-purple-100 fixed w-[90%] sm:w-[70%] md:w-[80%] lg:w-[45%] h-[40%] p-5 flex flex-col text-primary-white rounded-[20px]'>
            <button className='text-primary-cyan text-[1.3rem] cursor-pointer absolute top-[10px] right-[30px] transition-all hover:scale-110 z-[10]'
                onClick={handleToggleDialog}><img src={close} alt='close icon' className='w-[25px]' /></button>
            <p className='mt-4 mb-2 text-[1.1rem]'>{project.title}</p>
            <p className='text-[0.9rem] mb-2'>{project.description}</p>
            <div className='flex justify-between items-end mt-auto'>
              <div className='flex flex-wrap items-center gap-1 w-1/2'>
                  {project.techStack.map(image => (
                    <div key={image.id} className='w-[27px]'>
                      <img src={image.image} alt={image.desc} />
                    </div>
                  ))}
              </div>

              {project.isMobile ? 
                <div className='flex flex-col justify-between'>
                  {project.androidLink && <LinkButton externalLink={project.androidLink} iconLink={googlePlayBadge} text='' />}
                  {project.iosLink && <LinkButton externalLink={project.iosLink} iconLink={appStoreBadge} text='' />}
                  {project.githubLink && <LinkButton exernalLink={project.githubLink} iconLink={githubLogo} text='Check it on GitHub' />}
                </div>
               : 
                <div className='flex flex-col gap-1 justify-between'>
                  {project.projectLink && <LinkButton externalLink={project.projectLink} iconLink={projectLive} text='Check project live' />}
                  {project.githubLink && <LinkButton externalLink={project.githubLink} iconLink={githubLogo} text='Check it on GitHub' />}
                </div>
              }
            </div>
        </div>
    </div>
  )
}

export default ProjectDialog