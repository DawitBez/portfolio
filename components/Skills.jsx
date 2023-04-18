import React from 'react'
import Image from 'next/image'
import Html from '../public/skills/html.png'
import Css from '../public/skills/css.png'
import Javascript from '../public/skills/javascript.png'
import ReactImg from '../public/skills/react.png'
import Tailwind from '../public/skills/tailwind.png'
import Github from '../public/skills/github-1.svg'
import Firebase from '../public/skills/firebase.png'
import NextJS from '../public/skills/nextjs.png'

export const Skills = () => {
  return (
    <>
      <div className='dark:text-cyan-400'>
        <h3 className='uppercase tracking-widest text-3xl py-1' id='skills'>
          Skills
        </h3>
        <div className='divider'></div>
        <div className='py-4 max-w-[800px] mx-auto flex flex-col justify-center h-full'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='rounded-full p-6 shadow-xl hover:scale-105 ease-in duration-300 dark:shadow-md dark:hover:shadow-cyan-600'>
              <div className='grid gap-4 justify-center items-center '>
                <div className='m-auto'>
                  <Image src={Html} alt='/' />
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300 dark:shadow-md dark:hover:shadow-cyan-600'>
              <div className='grid gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Css} alt='/' />
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300 dark:shadow-md dark:hover:shadow-cyan-600'>
              <div className='grid gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Javascript} width='64px' height='64px' alt='/' />
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300 dark:shadow-md dark:hover:shadow-cyan-600'>
              <div className='grid gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={ReactImg} width='64px' height='64px' alt='/' />
                </div>
              </div>
            </div>
            <div className='p-6 dark:bg-cyan-400 shadow-xl rounded-full hover:scale-105 ease-in duration-300 dark:shadow-md dark:hover:shadow-cyan-600'>
              <div className='grid gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={NextJS} width='64px' height='64px' alt='/' />
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300 dark:shadow-md dark:hover:shadow-cyan-600'>
              <div className='grid gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Tailwind} alt='/' />
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300 dark:shadow-md dark:hover:shadow-cyan-600'>
              <div className='grid gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Firebase} width='64px' height='64px' alt='/' />
                </div>
              </div>
            </div>
            <div className='p-6 dark:bg-cyan-400 shadow-xl rounded-full hover:scale-105 ease-in duration-300 dark:shadow-md dark:hover:shadow-cyan-600'>
              <div className='grid gap-4 justify-center items-center '>
                <div className='m-auto'>
                  <Image src={Github} width='64px' height='64px' alt='/' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
