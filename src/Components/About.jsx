import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='mt-20 text-2xl'>An independent and self-motivated person, with proven and experienced Frontend Development Skills. Looking to secure a challenging position in a reputable company to explore a problem solving environment and expand my knowledge.
        </p>
        <br />
        <p className='text-2xl'>
            My current studies are in the MERN Full Stack Programme at Masai School, where I have learned that good apps lead to good business, and I enjoy building websites using different technology stacks.
        </p>
      </div>
    </div>
  )
}

export default About
