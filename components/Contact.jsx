import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import ContactImg from '../public/images/contact.jpeg'

export const Contact = () => {
  return (
    <div id='contact' className='w-full'>
      <div className='max-w-[1240px] m-auto px-2 py-4 w-full'>
        <p className='text-3xl text-center tracking-widest uppercase py-6 dark:text-cyan-400'>
          Contact
        </p>

        <div className='divider'></div>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div
            className='col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-white rounded-xl p-4 dark:bg-cyan-700 dark:text-indigo-100'
            data-theme='lofi'
          >
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div className='text-center'>
                <h2 className='text-3xl py-2'>Dawit Bezu</h2>
                <p className='text-2xl'>Front-End Developer</p>
                <p className='py-4 text-lg'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div className='text-center py-3'>
                <p className='text-2xl uppercase py-6'>Connect With Me</p>
                <div className='flex items-center justify-between max-w-[150px] m-auto py-2'>
                  <Link
                    href='https://www.linkedin.com/in/dawit-bezu/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md shadow-gray-700 dark:shadow-sm dark:shadow-cyan-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href='https://github.com/DawitBez'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md shadow-gray-700 dark:shadow-sm dark:shadow-cyan-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-sm shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/1044b658-2e42-45c5-97db-b0a70c4a25e3'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-md py-2 dark:text-cyan-400'>
                      Name
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-md py-2 dark:text-cyan-400'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-md py-2 dark:text-cyan-400'>
                    Email
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-md py-2 dark:text-cyan-400'>
                    Subject
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-md py-2 dark:text-cyan-400'>
                    Message
                  </label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='text-md border-2 rounded-lg border-gray-300 btn dark:bg-cyan-700 dark:text-indigo-100 p-4 m-2'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
