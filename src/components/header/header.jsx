import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/photo_pratiksha.png'
import Headersocial from './HeaderSociles'





const header = () => {
  return (
  
    <header>
      <div className="container header_container">
        <h4> Hello I' m </h4>
        <h1>Pratiksha Sanam</h1>
        <h3 className='text-light'> Software Devloper</h3>
         <CTA />
         <Headersocial />
      


         <div className='me'>
          <img src={ME} alt="me" />

         </div>
         <a href='#contact' className='scroll_down'>scroll Down</a>
      </div>
    </header>
  )
}

export default header
