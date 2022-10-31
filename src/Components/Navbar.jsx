import React from 'react';
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const links=[
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'portfolio'
    },
    {
      id:4,
      link:'experience'
    },
    {
      id:5,
      link:'contact'
    },
  ];

  const [nav ,setNav ] =useState(false);


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
    <div>
      <h1 className="font-signature text-4xl">Vivek</h1>
    </div>

    <ul className='hidden sm:flex'>

    {links.map(({id,link})=>( 
    <li key={id} className='px-3 cursor-pointer font-medium capitalize text-gray-500 hover:scale-125 duration-200'>
      {link}
      </li>))}
      </ul>

      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-3 z-10 text-gray-500 sm:hidden'>
        {nav? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

{nav && (
     <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-700'>
     {links.map(({id,link})=>( 
           <li key={id} className='text-4xl px-4 py-4 cursor-pointer capitalize text-gray-400'>
       {link}
       </li>))}
     </ul>
)}

    </div>
  )
}

export default Navbar
