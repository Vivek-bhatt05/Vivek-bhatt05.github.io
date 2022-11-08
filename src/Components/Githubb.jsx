import React from 'react'

const Github = () => {
  return (
//     <section style={{paddingLeft:'70px',paddingTop:'50px'}} className="github-st bg-gradient-to-b from-black to-gray-800 text-white md:h-screen px-40 pt-6'" id="github-">

//     <div id="github-stats">
//       <div className="container">
//       <p className="text-4xl font-bold inline border-b-4 border-gray-500 pl-4 py-5 mb-8 sm:text-4xl">Github Status</p>
//         <div className="github-stats-list">
//           <div className="github-stat" >
//             <img
//               src="https://github-readme-streak-stats.herokuapp.com/?user=Vivek-bhatt05&theme=indian-flag"
//               alt="Github Contributions"
//             />
//           </div>
//           <div className="github-stat">
//             <img
//               src="https://github-readme-stats.vercel.app/api?username=Vivek-bhatt05&theme=flag-india&show_icons=true&count_private=true"
//               alt="Github Stats"
//             />
//           </div>
//           <div className="github-stat">
//             <h4 className="mb-0" style={{textAlign:"center", color:"white"}}>
//               Vivek Bhatt's contribution calendar
//             </h4>
//             <img
//               src="https://ghchart.rshah.org/Vivek-bhatt05"
//               alt="Vivek"
//               style={{height:"auto", marginTop:"5vh", color:"red"}}
//             />
           
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
<section className="github-st" id="github-" style={{marginTop:'40px',paddingLeft:'40px', backgroundColor:'black',color:'white'}}>
<div id="github-stats">
  <div className="container">
    <h1 style={{fontSize:'30px'}}>GitHub Status</h1>
    <div className="github-stats-list">
      <div className="github-stat">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Vivek-bhatt05&theme=indian-flag"
          alt="Github Contributions"
        />
      </div>
      <div className="github-stat">
        <img
          src="https://github-readme-stats.vercel.app/api?username=Vivek-bhatt05&theme=flag-india&show_icons=true&count_private=true"
          alt="Github Stats"
        />
      </div>
      <div className="github-stat">
        <h4 className="mb-0" style={{textAlign:"center", color:"white"}}>
          Vivek Bhatt's contribution calendar
        </h4>
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
