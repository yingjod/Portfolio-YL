"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton'

const TAB_DATA=[
{
  title:'Skills',
  id:'skills',
  content:(
    <ul className='list-disc pl-2'>
      <li>Node.js</li>
      <li>Express</li>
      <li>PostgreSQL</li>
      <li>JavaScript</li>
      <li>React</li>
    </ul>
  )
},
{
  title:'Education',
  id:'education',
  content:(
    <ul className='list-disc pl-2'>
      <li>General Assembly,Software Engineering Immersive.</li>
      <li>Shih Chien University,Bachelor's degree, Business Administration and Management</li>
    </ul>
  )
},
]

export const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/hero.png' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
          <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
          <p className='trxt-base md:text-lg'>I am a dynamic professional with extensive experience in operation management, accounting, and store management across diverse industries. As a director of a trading company, I excel in fostering teamwork, implementing efficient processes, and driving organizational success.
            Recently completing a software engineering course at GA, I am eager to pivot into a software engineering career. I aim to fuse my management background with new challenges, leveraging my adaptability, passion for innovation, and knack for process enhancement to contribute fresh perspectives and solutions in the tech realm.
            Excited about the prospect of merging my varied experiences with software engineering, I am ready to embark on a career path that aligns with my passion for continual learning and problem-solving.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton 
            selectTab={() => handleTabChange('skills')} 
            active={tab === "skills"}>
            {" "}
            Skills{" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange('education')} 
            active={tab === "education"}>
            {" "}
            Education{" "}
            </TabButton>
            {/* <TabButton 
            selectTab={() => handleTabChange('experience')} 
            active={tab === "experience"}>
            {" "}
            Experience{" "}
            </TabButton> */}
          </div>
          <div className='mt-8'>{TAB_DATA.find((t)=>t.id===tab).content}</div>
        </div>
        
      </div>
    </section >

  )
}

export default AboutSection
