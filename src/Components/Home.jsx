import React from 'react'
import helloo from '../assests/helloo.jpg';
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll';
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Home = () => {
    const links=[
        {
            id:1,
            child:(
            <>
               LinkedIn <FaLinkedin size={30} />
            </>
            ),
            href:'https://www.linkedin.com/in/vivek-bhatt-4a2835237/',
        },
        {
            id:2,
            child:(
            <>
               GitHub <FaGithub size={30} />
            </>
            ),
            href:'https://github.com/Vivek-bhatt05'
        },
        {
            id:3,
            child:(
            <>
               Mail <HiOutlineMail size={30} />
            </>
            ),
            href: ' mailto:vivelbhatt529@gmail.com '
        }
    ]
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-20 sm:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl md:text-6xl text-white font-bold'>I'm a Full Stack Developer</h2>

                <p className='text-gray-300 py-4 max-w-md'>A passionate Full-Stack Web Developer, a knack for stunning designs, a heart for social causes, who aims to expand his knowledge on niche technologies working for a progressive organization and contributing towards its growth.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-500'>
                        <MdKeyboardArrowRight size={30} />
                        </span>
                    </Link>
                    <ul>
                {links.map(({id,child,href,download})=>(
                <li key={id} className='flex justify-center w-40 h-14 px-4 bg-gray-500 ml-[-10px] '>
                <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="_blank" rel='noreferrer'>
                    {child}
                  </a>
                </li>
                 ))}   
                 </ul>
                </div>
            </div>

            <div>
                <img src={helloo} alt="my profile" className='rounded-2xl mx-auto w-1/3 md:w-1/3 '  />
            </div>
        </div>
    </div>
  )
}

export default Home
