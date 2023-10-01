import React from 'react'
import SectionTitle from './SectionTitle'
import Accordion from './Accordion'
import { skillsSection } from '../content'

const Skills = () => (
  <section className='flex flex-col mt-14'>
    <SectionTitle title={skillsSection.title} />

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-14 gap-y-3 mx-10 lg:mx-20 mt-5'>
      {skillsSection.skills.map(skillCategory => (
        <Accordion key={skillCategory.id} {...skillCategory} />
      ))}
    </div>
  </section>
)

export default Skills