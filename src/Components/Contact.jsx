import React from 'react'

const Contact = () => {
  return (
    <div name='contact' style={{marginTop:'90px'}} className='w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
        <div className='flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch</p>
          </div>

          <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/982e7512-964a-4c3f-9d27-994bffe12085" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="email" name="email" placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name="message" placeholder='Enter Your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md duration-300 hover:scale-125'>Let's Talk</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact