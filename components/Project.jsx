import React from 'react'
import { ProjectItem } from './ProjectItem'
import web1 from '../public/images/project-1.jpeg'
import web2 from '../public/images/project-2.jpg'
import web3 from '../public/images/project-3.jpeg'
import web4 from '../public/images/project-4.jpeg'
export const Project = () => {
  return (
    <>
      <div class='py-4'>
        <h3
          className='uppercase tracking-widest text-3xl py-1 dark:text-cyan-400'
          id='project'
        >
          Projects
        </h3>
        <div className='divider'></div>
        <p className='py-2 leading-8 text-gray-800 text-lg dark:text-indigo-100 font-poppins'>
          My goal is to build modern and innovative websites that push the
          boundaries of what is possible. Through my projects, I have
          demonstrated my ability to create{' '}
          <span className='text-cyan-500'>dynamic</span> and{' '}
          <span className='text-cyan-500'>responsive</span> web pages that are
          both functional and aesthetically pleasing.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-3 py-4'>
        <div className='basis-1/3 flex-1'>
          <ProjectItem
            title='Coffee Drinks Recipe'
            backgroundImg={web1}
            projectUrl='https://just-coffee-etgg2mmxh-dawitbez.vercel.app/'
            githubLink='https://github.com/DawitBez/just-coffee'
            tech='NextJS, Contentful'
            target='_blank'
            rel='noreferrer'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <ProjectItem
            title='Food Delivery'
            backgroundImg={web4}
            projectUrl='https://snab-delivery-kbw5tylr5-dawitbez.vercel.app/'
            githubLink='https://github.com/DawitBez/snab-delivery'
            tech='React JS'
            target='_blank'
            rel='noreferrer'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <ProjectItem
            title='Cocktails App'
            backgroundImg={web2}
            projectUrl='https://cocktails-nextjs-api.vercel.app/'
            githubLink='https://github.com/DawitBez/cocktails-nextjs-api'
            tech='React JS'
            target='_blank'
            rel='noreferrer'
          />
        </div>

        <div className='basis-1/3 flex-1'>
          <ProjectItem
            title='Travel Website'
            backgroundImg={web3}
            projectUrl='https://epic-resort-qm0ov32pu-dawitbez.vercel.app/'
            githubLink='https://github.com/DawitBez/epic-resort'
            tech='NextJS, Tailwind Css'
            target='_blank'
            rel='noreferrer'
          />
        </div>
      </div>
    </>
  )
}
