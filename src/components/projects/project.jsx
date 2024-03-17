import React from 'react'
import './project.css'
import IMG1 from '../../assets/IMGeconsys.png'
import IMG2 from '../../assets/IMGchat.png'
import IMG3 from '../../assets/IMGUser.png'
import IMG4 from '../../assets/IMGSpotify.png'
import IMG5 from '../../assets/IMGcripto.png'
import IMG6 from '../../assets/IMGemp.png'
import { FaGithub } from "react-icons/fa6";

const project = () => {
  return (
    <section id='projects'>
      <h5>My Work</h5>
      <h2>Projects</h2>
      <div className='container projects__container'>
    <article className=' project__items'>
      <div className='projects__image'>
        <img src={IMG1} alt="" />
        <h3>Econsys</h3>
        <p> 
Econsys, a cloud-based SaaS platform, prioritizes governance in commercial management. It integrates automated risk management and compliance, streamlining decision-making and policy enforcement. The user-friendly design fosters efficient collaboration, making it a versatile solution for organizations navigating complex regulatory landscapes. Econsys stands as a unified hub for automation and adherence to industry standards</p>


      </div>

    </article>
    <article className=' project__items'>
      <div className='projects__image'>
        <img src={IMG2} alt="" />
        <h3>Chat Application</h3>
        <p>A chat application built using React and Firebase, enabling real-time messaging. Firebase handles data storage and synchronization, while react provides a dynamic and user-friendly front-end interface. Users can exchange messages seamlessly and securely

</p>

        
      </div>

    </article>
    <article className=' project__items'>
      <div className='projects__image'>
        <img src={IMG3} alt="" />
        <h3>User Managment System</h3>
        <p>The User Management CRUD Application is an efficient and user-friendly system for managing user information. It boasts robust validation, seamless database connectivity, and leverages Axios API to connect to the Spring Boot backend, ensuring accurate data handling and secure operations</p>
        <a href="https://github.com/pratikshaSanam/Reat_SpringBoot_CRUD">Click here for the GitHub repository  <FaGithub/></a>

      </div>

     

    </article>
    <article className=' project__items'>
      <div className='projects__image'>
        <img src={IMG4} alt="" />
        <h3>Spotify clone </h3>
        <p>Developed a Spotify clone using React.js, mimicking the core functionalities of the original platform. Implemented features such as user authentication, playlist management, and real-time music playback. Demonstrated proficiency in React.js and API integration while delivering a seamless music streaming experience</p>
        <a href="https://github.com/pratikshaSanam/spotify-clone/tree/main">Click here for the GitHub repository  <FaGithub/></a>

      </div>

    </article>
    <article className=' project__items'>
      <div className='projects__image'>
        <img src={IMG5} alt="" />
        <h3>crypto currency tracker</h3>
        <p> Created a cryptocurrency tracker project using React.js, enabling users to monitor real-time prices, trends, and portfolio performance. Implemented API integration for fetching data and utilized React components for dynamic data visualization. Demonstrated expertise in React.js and data-driven web applications</p>
        <a href="https://github.com/pratikshaSanam/crypto-currency">Click here for the GitHub repository  <FaGithub/></a>

      </div>

    </article>
    <article className=' project__items'>
      <div className='projects__image'>
        <img src={IMG6} alt="" />
        <h3>Payroll Management System</h3>
        <p>Developed a comprehensive Payroll Management System in Java using NetBeans IDE, with SQLite database connectivity through JDBC. Effectively managed financial records, employee details, salary deductions, overtime updates, bonus generation, and performance metrics. Streamlined payroll processes and enhanced organizational efficiency</p>
        <a href="https://github.com/pratikshaSanam/shiny-octo-palm-tree">Click here for the GitHub repository  <FaGithub/></a>

      </div>

    </article>

      </div>


    </section>
  )
}

export default project
