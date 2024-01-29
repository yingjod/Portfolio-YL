"use client"
import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: 'Dive-log',
    description: 'The Dive-Log website serves as a platform for divers to log their dives. For the frontend design, I utilized React.js and Bootstrap, while the backend setup was established using Python Django.',
    image: '/images/projects/P4.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 2,
    title: 'The Tasty Palette',
    description: 'In developing The Tasty Palette, our team adeptly utilized a full-stack approach, employing React.js and Bootstrap for frontend design and Node.js, Express.js, and MongoDB for a robust backend.',
    image: '/images/projects/P3.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 3,
    title: 'Family movie night',
    description: 'In creating Family Movie Night, Anne-Laure and I worked together to build a React-based website',
    image: '/images/projects/P2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 4,
    title: 'Hungry BAO!',
    description: 'I used HTML, CSS, and JavaScript to construct a simple yet captivating grid-based game',
    image: '/images/projects/P1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
]

export const ProjectsSection = () => {
  const [tag, setTag] = useState('All')

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects= projectsData.filter((project)=>
    project.tag.includes(tag)
  )
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-10'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
         <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  )
}
