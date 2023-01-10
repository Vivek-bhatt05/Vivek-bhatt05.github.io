import React from 'react';
import Coschedule from '../assests/Portfolio/Coschedule.png';
import Fiverr from '../assests/Portfolio/Fiverr.png';
import weather from '../assests/Portfolio/weather.jpeg';
import naukri from '../assests/Portfolio/naukri.png';


const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src: Coschedule,
            title:"Coschedule.com",
            glink:"https://github.com/Vivek-bhatt05/coschedule.com/tree/master/fun-note-365-main",
            nlink:"https://heroic-alfajores-0820ff.netlify.app/",
            detail:"This is a clone of Coschedule website, it helps us organise our days accordingly and save out time and help us in time management.",
            tech:"Tech Stack: HTML | CSS | JavaScript"
        },
        {
            id:2,
            src: naukri,
            title:"Jobnest.in",
            glink:"https://github.com/Vivek-bhatt05/nauk",
            nlink:"https://jobnest-fawn.vercel.app/",
            detail:"Jobnest is a website which help us search for jobs which are available in the market and also hire the candidates which we need.",
            tech:"Tech Stack: HTML | CSS | JavaScript | React"
        },
        {
            id:3,
            src: Fiverr,
            title:"Fiverr.com",
            glink:"https://github.com/Vivek-bhatt05/green-office-8741",
            nlink:"https://rainbow-mousse-e54d86.netlify.app/",
            detail:"This is a clone of fiver website which is a site for freelancers which helps them to get projects from the people who needs to get there work done.",
            tech:"Tech Stack: HTML | CSS | JavaScript"
        },
        {
            id:4,
            src: weather,
            title:"Weather.com",
            glink:"https://github.com/Vivek-bhatt05/Weather",
            nlink:"https://lustrous-shortbread-7ea63b.netlify.app/",
            detail:"Weather app which helps us know the location and weather of the person who first opens it and can search for the weather of any place he wants.",
            tech:"Tech Stack: HTML | CSS | JavaScript"
        }
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full pb-16  text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-center'>
            {portfolios.map(({id,src,nlink,glink,detail,title,tech})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-500 hover:scale-105' />
            <div className='mt-2 text-xl'>{title}</div>
            <div className='mt-2'>{detail}</div>
            <div className='mt-2 text-gray-400'>{tech}</div>
            <div className='flex justify-center items-center'>
            <a href={nlink} target="_blank" rel="noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
            </a>
            <a href={glink} target="_blank" rel="noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-500 hover:scale-110'>Code</button>
            </a>
            </div>
        </div>
            ))}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
