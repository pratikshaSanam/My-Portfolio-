import React from 'react'
import './about.css'
//import ME from '../../assets/me-about.jpg'

function about() {
  return (
    <section id='about'>

      <h5> Get To Know</h5>
      <h2>About Me</h2>
<div className='container about_container'>
  <div className='about_me'>
  {/* <div className='sbout__me-image'>
    <img src={ME} alt='about image'/>

  </div> */}
  </div>
<div className='about__contenet'>
  
  <div className='about__cards'>
    <article className='about__card'>
      <h5>Full Stack Devloper</h5>
    </article>

    <article className='about__card'>
      <h5>Frontend Devloper</h5>
    </article>

    <article className='about__card'>
      <h5>Backend Devloper</h5>
    </article>

  </div>
  <p>
  Experienced software developer proficient in both frontend and backend technologies. Adept at creating scalable solutions, troubleshooting issues, and proficient in multiple programming languages. Committed to delivering high-quality and innovative software development


  </p>

</div>
</div>

    </section>
  )
}

export default about
