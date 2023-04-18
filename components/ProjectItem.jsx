import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import { FaGithub } from 'react-icons/fa'

export const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  githubLink,
}) => {
  return (
    <motion.div
      className='text-center shadow-lg p-2 my-10 flex-1'
      whileHover={{ scale: 1.1 }}
    >
      <div className='relative flex items-center justify-center h-full w-full rounded-xl group hover:bg-gradient-to-r from-gray-900 to-gray-600 font-poppins'>
        <Image
          className='rounded-xl group-hover:opacity-10'
          src={backgroundImg}
          alt='/'
        />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>
            {title}
          </h3>
          <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
          <Link href={githubLink} data-theme='lofi'>
            <p className='text-center py-2 mb-5 rounded-md bg-yellow-400 text-gray-700 font-bold text-md cursor-pointer dark:bg-cyan-400'>
              <FaGithub className='inline pr-2 text-3xl' /> Github
            </p>
          </Link>
          <Link href={projectUrl} data-theme='lofi'>
            <p className='text-center py-2 mb-5 rounded-md bg-white text-gray-700 font-bold text-md cursor-pointer'>
              Website
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
