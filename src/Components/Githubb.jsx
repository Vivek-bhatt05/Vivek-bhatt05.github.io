import React from 'react'

const Github = () => {
  return (
    
    
    <section  className="github-st" id="github-">

      <div id="github-stats" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen px-40 pt-6'  >
        <div className="container">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 pl-4 py-5 mb-8">Github Status</h1>
          <div>
            <div className="my-7">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Vivek-bhatt05&theme=indian-flag"
                alt="Github Contributions"
              />
            </div>
            <div className="my-6">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Vivek-bhatt05&theme=flag-india&show_icons=true&count_private=true"
                alt="Github Stats"
              />
            </div>
            <div className="github-stat">
              <p className="text-2xl font-bold  py-5 mb-8"  >
                Vivek Bhatt's contribution calendar
              </p>
              <img
                src="https://ghchart.rshah.org/Vivek-bhatt05"
                alt="Vivek"
                style={{width:"100%" ,height:"auto", marginTop:"5vh", color:"red"}}
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Github
