import React from 'react';
import html from '../assests/html.png';
import css from '../assests/css.png';
import javascript from '../assests/javascript.png';
import chakra from '../assests/chakra.png';
import react from '../assests/react.png';
import github from '../assests/github.png';
import redux from '../assests/redux.png';
import tailwind from '../assests/tailwind.png';


const Experience = () => {

    const techs=[
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title: 'Java Script',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id:6,
            src: chakra,
            title: 'Chakra UI',
            style: 'shadow-teal-500'
        },
        {
            id:7,
            src: redux,
            title: 'Redux',
            style: 'shadow-blue-500'
        },
        {
            id:8,
            src: tailwind,
            title: 'TailWind',
            style: 'shadow-sky-400'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                <p className='py-6'> These are the technologies i have worked with</p>
            </div>

          <div className='w-full grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 text-center'>
            {techs.map(({id,src,title,style})=>(
            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg ${style}`}>
            <img src={src} alt="" className='rounded-md duration-500 mx-auto hover:scale-105' />
            <p className='mt-4'>{title}</p>
        </div>
            ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience

