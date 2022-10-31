import React from 'react'
import myImage from '../assests/myimagec.png';
import {MdKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl md:text-6xl text-white font-bold'>I'm a Full Stack Developer</h2>

                <p className='text-gray-800 py-4 max-w-md'>A passionate Full-Stack Web Developer, a knack for stunning designs, a heart for social causes, who aims to expand his knowledge on niche technologies working for a progressive organization and contributing towards its growth.
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-500'>
                        <MdKeyboardArrowRight size={30} />
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={myImage} alt="my profile" className='rounded-2xl mx-auto h-4/3 w-1/3 md:w-1/3 h-4/3'  />
            </div>
        </div>
    </div>
  )
}

export default Home
