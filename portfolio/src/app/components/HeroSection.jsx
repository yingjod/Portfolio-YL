"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <section className='mt-70 mb-80'>
      <div className='grid grid-cols-1 sm:grid-cols-12 mt-60 mb-60'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className='text-[#969fa5] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I&apos;m {''}</span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Ying',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'Software engineer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h1>
          <p className='text-[#bfbfbf] text-base sm:text-lg mb-6 lg:text-l'>
            A software engineer with Management and Accounting experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
>
          <div className='rounded-full  w-[280px] h-[280px] lg:w-[400px] relative'>
            <Image
              src='/images/profile-1.png'
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300} />
          </div>
        </motion.div >
        
      </div>
    </section>
  )
}
