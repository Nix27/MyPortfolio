import React from 'react'
import SectionTitle from './SectionTitle'
import Accordion from './Accordion'
import { skillsSection } from '../content'

const Skills = () => (
  <section id='skills' className='flex flex-col lg:flex-row lg:justify-center mt-14'>
    <div className='lg:w-[50%] lg:flex lg:items-center lg:justify-center'>
      <SectionTitle title={skillsSection.title} />
    </div>

    <div className='flex flex-col gap-x-0 sm:gap-x-14 gap-y-3 mx-10 lg:mx-20 mt-5 lg:w-[40%]'>
      {skillsSection.skills.map(skillCategory => (
        <Accordion key={skillCategory.id} {...skillCategory} />
      ))}
    </div>
  </section>
)

export default Skills