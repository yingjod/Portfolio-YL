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
            <p className='list-disc pl-2 text-white text-8xl quotation-marks '> &lt; </p>
            <Image className='ml-6 mr-6 skillimg' src={htmlIcon} alt='html5icon' weight={50} height={50} />
            <Image className='mr-6 skillimg' src={cssIcon} alt='cssicon' weight={50} height={50} />
            <Image className='mr-6 skillimg' src={jsIcon} alt='jsicon' weight={50} height={50} />
            <Image className='mr-6 skillimg' src={reactIcon} alt='reacticon' weight={50} height={50} />
            <Image className='mr-6 skillimg' src={bootstrapIcon} alt='bootstrapicon' weight={50} height={50} />
            <Image className='mr-6 skillimg' src={sassIcon} alt='sassicon' weight={50} height={50} />
            <Image className='mr-6 skillimg' src={nextjsIcon} alt='nextjsicon' weight={50} height={50} />
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
          </div><br></br>

          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl xl:hidden md:hidden'> - </p>
          </div>

          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &lt; </p>

            <Image className='ml-5 mr-5 skillimg' src={expressIcon} alt='expressicon' weight={50} height={50} />
            <Image className='mr-5 skillimg' src={pythonIcon} alt='pythonicon' weight={50} height={50} />
            <Image className='mr-5 skillimg' src={djangoIcon} alt='djangoicon' weight={50} height={50} />
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &lt; </p>
            <Image className='ml-5 mr-5 skillimg' src={mongodbIcon} alt='mongodbicon' weight={50} height={50} />
            <Image className='mr-5 skillimg' src={postgresqlIcon} alt='postgresqlicon' weight={50} height={50} />
            <p className='list-disc pl-2 text-white text-8xl quotation-marks'> &gt; </p>
          </div><br></br>

          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl xl:hidden md:hidden'> - </p>
          </div>

          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl quotation-marks skillimg'> &lt; </p>
            <Image className='ml-5 mr-5 skillimg' src={npmIcon} alt='npmicon' weight={50} height={50} />
            <Image className='mr-5 skillimg' src={herokuIcon} alt='herokuicon' weight={50} height={50} />
            <Image className='mr-5 skillimg' src={githubIcon} alt='githubicon' weight={50} height={50} />
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
            <p className='list-disc pl-2 text-white text-8xl educationmark'> &lt; </p>
            <p className='font-bold sm:text-xl skills'>Software Engineering Immersive, <br></br>General Assembly, <br></br>Oct 2023 - Jan 2024
</p>
            <p className='list-disc pl-2 text-white text-8xl educationmark'> &gt; </p>
          </div>
          <div className='flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl xl:hidden md:hidden'> - </p>
          </div>
          <div className='list-disc pl-2 text-[#FC6F2F] text-2xl text-center flex flex-row items-center mt-5 justify-center flex-wrap sm:flex-nowrap'>
            <p className='list-disc pl-2 text-white text-8xl educationmark'> &lt; </p>
            <p className='font-bold sm:text-xl skills'>Bachelor&apos;s degree, <br></br>Business Administration and Management, <br></br>Shih Chien University, <br></br>Sep 2008 - Sep 2012
</p>
            <p className='list-disc pl-2 text-white text-8xl educationmark'> &gt; </p>
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

    <div className='flex flex-col mt-20 mb-20 '>
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