import React from 'react'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <>
      <div className='dark:text-cyan-400 w-full py-10'>
        <h3 className='uppercase tracking-widest text-3xl py-1' id='about'>
          About me
        </h3>

        <div className='divider'></div>
        <p className='text-lg py-5 leading-8 text-gray-800 dark:text-indigo-100 font-poppins'>
          I have extensive experience in designing and building modern websites
          using HTML, CSS, and JavaScript. I incorporate frameworks like{' '}
          <span className='text-cyan-500'> React</span> and{' '}
          <span className='text-cyan-500'>Vue</span> and to enhance the
          functionality and responsiveness of my sites.
        </p>
        <p className='text-lg leading-8 text-gray-800 dark:text-indigo-100 font-poppins'>
          My focus on{' '}
          <span className='text-cyan-500'>
            user experience, attention to detail, and strong understanding of
            web design principles
          </span>{' '}
          enables me to create visually engaging and professional websites.
        </p>
      </div>
      <div className='lg:flex gap-10 font-poppins'>
        <motion.div
          className='text-center shadow-lg p-10 rounded-sm my-10 flex-1 dark:border-solid border-2 border-white dark:bg-cyan-700'
          whileHover={{ scale: 1.1 }}
          data-theme='lofi'
        >
          <h3 className='text-2xl text-cyan-600 pt-8 pb-2 dark:text-indigo-100'>
            Beautiful Designs
          </h3>
          <p className='py-2 font-normal dark:text-cyan-200'>
            Creating visually compelling designs that prioritize user engagement
            and interactivity.
          </p>
        </motion.div>

        <motion.div
          className='text-center shadow-lg p-10 rounded-sm my-10 flex-1 dark:border-solid border-2 border-white dark:bg-cyan-700'
          whileHover={{ scale: 1.1 }}
          data-theme='lofi'
        >
          <h3 className='text-2xl text-cyan-600 pt-8 pb-2 dark:text-indigo-100'>
            Clean Code
          </h3>
          <p className='py-2 dark:text-cyan-200'>
            High-quality, feature-rich websites that meet the needs of clients
            and users alike.
          </p>
        </motion.div>

        <motion.div
          className='text-center shadow-lg p-10 rounded-sm my-10 flex-1 dark:border-solid border-2 border-white dark:bg-cyan-700'
          whileHover={{ scale: 1.1 }}
          data-theme='lofi'
        >
          <h3 className='text-2xl text-cyan-600 pt-8 pb-2 dark:text-indigo-100'>
            Consulting
          </h3>
          <p className='py-2 dark:text-cyan-200'>
            Creating visually compelling designs that prioritize user engagement
            and interactivity.
          </p>
        </motion.div>
      </div>
    </>
  )
}
