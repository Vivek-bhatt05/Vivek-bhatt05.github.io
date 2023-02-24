import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Github = () => {
  return (
  <section className="github-st" id="github-" style={{marginTop:'70px',paddingLeft:'40px', backgroundColor:'black',color:'white'}}>
<div id="github-stats">
  <div className="container">
    <h1 style={{fontSize:'30px',marginTop:"30px",color:"black"}}>GitHub Status</h1>
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
        <h4 className="mb-0" style={{textAlign:"center",marginBottom:"20px", color:"white"}}>
          Vivek Bhatt's contribution calendar
        </h4>
        <GitHubCalendar username="Vivek-bhatt05	" />
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Github
