'use client'
import React, { useTransition, useState } from 'react'
import { TabButton } from './TabButton'
import Image from 'next/image'
import htmlIcon from '../../../public/html.svg'
import cssIcon from '../../../public/cssIcon.svg'
import jsIcon from '../../../public/javascript.svg'
import reactIcon from '../../../public/react.svg'
import bootstrapIcon from '../../../public/bootstrap.png'
import sassIcon from '../../../public/sass.svg'
import nextjsIcon from '../../../public/nextjs.svg'
import nodeIcon from '../../../public/node.png'
import expressIcon from '../../../public/express.png'
import pythonIcon from '../../../public/python.svg'
import djangoIcon from '../../../public/django.svg'
import mongodbIcon from '../../../public/MongoDB.png'
import postgresqlIcon from '../../../public/postgresql.png'
import npmIcon from '../../../public/npm.svg'
import herokuIcon from '../../../public/heroku.svg'
import githubIcon from '../../../public/github.svg'

const SkillSection = () => {
  const TAB_DATA = [
    {
      title: 'Technologies & Skills',
      id: 'Technologies & Skills',
      content: (
        <>
          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &lt; </p>
            {/* <h1 className='list-disc pl-2 font-bold text-red-500 text-xl'>
              Frontend - </h1> */}
            <Image className='ml-6 mr-6' src={htmlIcon} alt='html5icon' weight={50} height={50} />
            <Image className='mr-6' src={cssIcon} alt='cssicon' weight={50} height={50} />
            <Image className='mr-6' src={jsIcon} alt='jsicon' weight={50} height={50} />
            <Image className='mr-6' src={reactIcon} alt='reacticon' weight={50} height={50} />
            <Image className='mr-6' src={bootstrapIcon} alt='bootstrapicon' weight={50} height={50} />
            <Image className='mr-6' src={sassIcon} alt='sassicon' weight={50} height={50} />
            <Image className='mr-6' src={nextjsIcon} alt='nextjsicon' weight={50} height={50} />
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
          </div><br></br>

          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl xl:hidden md:hidden'> - </p>
          </div>

          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            {/* <h1 className='list-disc pl-2 font-bold text-red-500 text-xl'>Backend - </h1> */}
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &lt; </p>

            <Image className='ml-5 mr-5' src={expressIcon} alt='expressicon' weight={50} height={50} />
            <Image className='mr-5' src={pythonIcon} alt='pythonicon' weight={50} height={50} />
            <Image className='mr-5' src={djangoIcon} alt='djangoicon' weight={50} height={50} />
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &lt; </p>
            <Image className='ml-5 mr-5' src={mongodbIcon} alt='mongodbicon' weight={50} height={50} />
            <Image className='mr-5' src={postgresqlIcon} alt='postgresqlicon' weight={50} height={50} />
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
          </div><br></br>

          {/* <div className='flex flex-row items-center mt-5 justify-center'>
            <h1 className='list-disc pl-2 font-bold text-red-500 text-xl'>Databases - </h1>
            <Image className='ml-5 mr-5' src={mongodbIcon} alt='mongodbicon' weight={50} height={50} />
            <Image className='mr-5' src={postgresqlIcon} alt='postgresqlicon' weight={50} height={50} />
          </div><br></br> */}
          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl xl:hidden md:hidden'> - </p>
          </div>

          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            {/* <h1 className='list-disc pl-2 font-bold text-red-500 text-xl' >Tools - </h1> */}
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &lt; </p>
            <Image className='ml-5 mr-5' src={npmIcon} alt='npmicon' weight={50} height={50} />
            <Image className='mr-5' src={herokuIcon} alt='herokuicon' weight={50} height={50} />
            <Image className='mr-5' src={githubIcon} alt='githubicon' weight={50} height={50} />
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
          </div>


        </>
      )
    },
    {
      title: 'Education',
      id: 'education',
      content: (
        <>
          <div className='list-disc pl-2 text-[#FC6F2F] text-2xl text-center flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &lt; </p>
            <p className='font-bold skills'>General Assembly,Software Engineering Immersive</p>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
          </div>
          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl xl:hidden md:hidden'> - </p>
          </div>
          <div className='list-disc pl-2 text-[#FC6F2F] text-2xl text-center flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &lt; </p>
            <p className='font-bold sm:text-xl skills'>Shih Chien University,Bachelor's degree, Business Administration and Management</p>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
          </div >
        </>
      )
    },
  ]

  const [tab, setTab] = useState("Technologies & Skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }


  return (

    <div className='flex flex-col mt-20 '>
      <div className='flex flex-row justify-center text-2xl skills'>
        <TabButton
          selectTab={() => handleTabChange('Technologies & Skills')}
          active={tab === "Technologies & Skills"}
        >
          {" "}
          Technologies & Skills{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange('education')}
          active={tab === "education"}>
          {" "}
          Education{" "}
        </TabButton>
      </div>
      <div className='mt-8 '>{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
  )
}

export default SkillSection