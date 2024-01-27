import React from 'react'
import Image from 'next/image'

export const AboutSection = () => {
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/hero.png' width={500} height={500} />
        <div>
          <h2>about me</h2>
          <p>I am a dynamic professional with extensive experience in operation management, accounting, and store management across diverse industries. As a director of a trading company, I excel in fostering teamwork, implementing efficient processes, and driving organizational success.
            Recently completing a software engineering course at GA, I am eager to pivot into a software engineering career. I aim to fuse my management background with new challenges, leveraging my adaptability, passion for innovation, and knack for process enhancement to contribute fresh perspectives and solutions in the tech realm.
            Excited about the prospect of merging my varied experiences with software engineering, I am ready to embark on a career path that aligns with my passion for continual learning and problem-solving.
          </p>
        </div>
      </div>
    </section >

  )
}

export default AboutSection
