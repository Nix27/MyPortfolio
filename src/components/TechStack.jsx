import React from 'react'
import SectionTitle from './SectionTitle'
import { techstackSection } from '../content'
import { Carousel, IconButton } from "@material-tailwind/react";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

const TechStack = () => (
  <section id='tech-stack' className='flex flex-col px-10 mt-10'>
    <SectionTitle title={techstackSection.title} />

    <Carousel
      className='mt-10 flex'
      loop={true}
      autoplay={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="cyan"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <AiOutlineArrowLeft className='text-[1.7rem]' />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="cyan"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <AiOutlineArrowRight className='text-[1.7rem]' />
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-primary-cyan" : "w-4 bg-primary-cyan"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {techstackSection.slides.map(slide => (
        <div key={slide.id} className='flex justify-center'>
          {slide.images.map(image => (
            <div key={crypto.randomUUID()} className='flex justify-center items-center'>
              <img key={image.id} src={image.image} alt={image.desc} className='w-[130px]' />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  </section>
)

export default TechStack