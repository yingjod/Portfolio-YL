"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import diving from '../../../public/images/1102229.jpg'
import camino from '../../../public/images/1102228.jpg'
import hiking from '../../../public/images/1102230.jpg'
import norway from '../../../public/images/1102243.jpg'

export const InterestSection = () => {
  return (
    <section id='about' className='text-[#a2a2a2] relative mt-50 bg-white'>
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
      <div className='gap-8 items-center my-8 mx-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='flex justify-between gap-8 items-center my-50 mx-20 xl:gap-18 sm:py-18 xl:px-18 abouttext'>
          <div>
            <h2 className='text-4xl font-bold text-[#FC6F2F] mb-4 mt-5 text-center '>Interests</h2>
            <p className='text-base md:text-lg text-center text-bold'>
              I&apos;m passionate about <b>scuba diving</b> and <b>hiking</b>, finding solace in the depths of the ocean and the heights of mountain trails.
              Fascinated by human behavior, I delve into <b>psychology</b> and enjoy the exploration of the mind through <b>reading</b>. A connoisseur of <b>gourmet cuisine</b>,
              I savor culinary experiences that tantalize the senses. With an <b>adventurous spirit</b>, I embrace new challenges and seek excitement in life&apos;s <b>adventures.</b><br></br>
            </p>
          </div>
        </div>
      </div>
      <div>
            <div className="row flex justify-center interestcon mr-20 ml-20 mb-20">
              <div className="col-4 mr-5 interest">
                <Image src={diving} alt="diving" height={300} />
              </div>
              <div className="col-4 mr-5 interest ">
                <Image src={norway} alt="camino" height={300} />
              </div>
              <div className="col-4 mr-5 interest">
                <Image src={camino} alt="norway" height={300} />
              </div>
              <div className="col-4 interest">
                <Image src={hiking} alt="norway" height={300} />
              </div>
            </div>
          </div>
    </section >

  )
}

export default InterestSection
