"use client"
import React, { useState, useRef } from 'react'
import { ProjectCard } from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

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
    tag: ['All', 'Mobile', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 3,
    title: 'Family Movie Night',
    description: 'Anne-Laure and I collaborated, a React-based website. We used SCSS for styling and Axios for API integration. With React-Bootstrap components, we added sorting, searching, and responsive design features.',
    image: '/images/projects/P2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 4,
    title: 'Hungry BAO!',
    description: 'I employed HTML, CSS, and JavaScript to develop a grid-based game, focusing on meticulous event listener implementation and thoughtful code organisation.',
    image: '/images/projects/P1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
]

export const ProjectsSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },

  }

  return (
    <section id='projects' ref={ref} className='mt-40'>
      <h2 className='text-center text-4xl font-bold text-[#FC6F2F] mt-20 mb-10 '>
        Projects
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
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
