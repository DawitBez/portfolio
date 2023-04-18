import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

//

export const Hero = () => {
  return (
    <>
      <div
        className='top-0 left-0 hero min-h-screen'
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/14553701/pexels-photo-14553701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"`,
        }}
      >
        <div className='hero-overlay bg-black/40'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className=''>
            <h2 className='text-3xl py-2 dark:text-white font-medium md:text-6xl tracking-wider font-mono'>
              Hi, I'm Dawit
            </h2>
            <h1 className='font-extrabold  py-2 leading-8 dark:text-cyan-600 md:text-xl max-w-xl mx-auto font-poppins tracking-widest'>
              <Typewriter
                options={{
                  strings: [
                    'Web Developer',
                    'UI/UX Designer',
                    'Next.js Developer',
                    'React Native Developer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <div className='flex items-center justify-between max-w-[150px] m-auto py-4'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='text-center shadow-lg p-5 rounded-full my-10 cursor-pointer dark:border-solid border-2 dark:border-sky-500 dark:text-cyan-300'
              >
                <Link
                  href='https://www.linkedin.com/in/dawit-bezu/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedinIn />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='text-center shadow-lg p-5 rounded-full my-10 cursor-pointer dark:border-solid border-2 dark:border-sky-500 dark:text-cyan-300'
              >
                <Link
                  href='https://github.com/DawitBez'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
