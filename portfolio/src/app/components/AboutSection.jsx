"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'




export const AboutSection = () => {

  return (
    <section id='about' className='text-[#a2a2a2] relative mt-50 bg-[white]'>
      <div className='gap-8 items-center my-8 mx-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='flex justify-between gap-8 items-center my-50 mx-20 xl:gap-18 sm:py-18 xl:px-18 abouttext'>
          <div>
            {/* Quotation marks */}
            <div className='absolute top-10 left-12 quotation-marks '>
              <div className='text-[#FC6F2F] text-8xl font-bold'>
                「
              </div>
            </div>
            <div className='absolute bottom-10 right-12 transform quotation-marks '>
              <div className='text-[#FC6F2F] text-8xl font-bold '>
                」
              </div>
            </div>
            <h2 className='text-4xl font-bold text-[#FC6F2F] mb-4 mt-5 text-center '>About me</h2>
            <p className='text-base md:text-lg text-center text-bold'>
              I'm a dynamic professional with extensive experience in operation management, accounting, and store management across diverse industries. <br></br>
              As a director of a trading business, I excel in fostering teamwork, implementing efficient processes, and driving organizational success.<br></br>
              Recently completing a software engineering course at GA, I am eager to pivot into a software engineering career.<br></br> 
              I aim to fuse my management background with new challenges, leveraging my adaptability, passion for innovation, and knack for process enhancement to contribute fresh perspectives and solutions in the tech realm.<br></br>
              Excited about the prospect of merging my varied experiences with software engineering, I am ready to embark on a career path that aligns with my passion for continual learning and problem-solving.<br></br>
            </p>
          </div>
        </div>

      </div>
    </section >

  )
}

export default AboutSection
