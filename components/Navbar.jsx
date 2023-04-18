import React from 'react'
import { motion } from 'framer-motion'
import { MdDarkMode } from 'react-icons/md'

export const Navbar = ({ darkMode, handleDarkModeToggle }) => {
  return (
    <div className={darkMode ? 'dark' : ''}>
      <nav className='pt-8 mb-5 flex  justify-center dark:text-cyan-600 h-10'>
        <ul className='flex text-xl items-center uppercase tracking-widest'>
          <MdDarkMode
            onClick={handleDarkModeToggle}
            className='cursor-pointer text-3xl'
          />

          <motion.li whileHover={{ scale: 1.2 }}>
            <a className='px-4 py-2 rounded-md ml-8' href='#about'>
              About
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a className='px-4 py-2 rounded-md ml-8' href='#skills'>
              Skills
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a className='px-4 py-2 rounded-md ml-8' href='#project'>
              Projects
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a className='px-4 py-2 rounded-md ml-8' href='#contact'>
              Contact
            </a>
          </motion.li>
        </ul>
      </nav>
    </div>
  )
}
