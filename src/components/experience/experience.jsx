import React from 'react'
import './experience.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { IoLogoAngular } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiFirebase } from "react-icons/si";
const experience = () => {
  return (
  
      <section id='experience'>
  
        <h5> What Skills I Have</h5>
        <h2>My Experience</h2>
  <div className='container experience_container'>
    
  <div className='experience__contenet'>
    
   
    <p>
    - Developed and maintained responsive web applications using frontend technologies, ensuring cross-browser compatibility and an optimal user experience.
   <br/>

- Collaborated with the team to resolve problems and streamline the deployment process
<br/>

- Delivering high-quality code, maintaining an efficient project life cycle, and achieving improvements in the development life cycle
  
    </p>
  
  </div>
  </div>

  <div className="container experiences_container">
        <div className="experience_frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experiences_content">
            <article className='experiences_detailes'>
            <FaHtml5 />
            
            <h5>HTML</h5>
            
            </article>
            <article className='experiences_detailes'>
            <RiJavascriptFill />
            <h5>JAVASCRIPT</h5>
            </article>
            <article className='experiences_detailes'>
            < FaCss3Alt/>
            <h5>CSS</h5>
            </article>
            <article className='experiences_detailes'>
            <SiJquery />
            <h5>JQEARY</h5>
            </article>
            <article className='experiences_detailes'>
            <FaBootstrap/>
            <h5>BOOSTRAP</h5>
            </article>
            <article className='experiences_detailes'>
            <SiTypescript/>
            <h5>TYPESCRIPT</h5>
            </article>
            <article className='experiences_detailes'>
            <FaReact/>
            <h5>REACT JS</h5>
            </article>
            <article className='experiences_detailes'>
            <IoLogoAngular />


            <h5>ANGULAR</h5>
            </article>

          </div>

        </div>
        <div className="experience_backtend">
        <h3>Backend Devlopment</h3>
        <div className="experiences_content">
            <article className='experiences_detailes'>
            <FaJava />
            <h5>JAVA</h5>
            </article>
            <article className='experiences_detailes'>
            <SiSpring/>
            <h5>SPRING FRAMWORKS</h5>
            </article>
            <article className='experiences_detailes'>
            <SiSpringboot/>
            <h5>SQL</h5>
            </article>
            <article className='experiences_detailes'>
            <AiOutlineConsoleSql/>
            <h5>SPRING BOOT</h5>
            </article>
            <article className='experiences_detailes'>
            < SiMysql />
            <h5>MySQL</h5>
            </article>
            <article className='experiences_detailes'>
            <SiFirebase />
            <h5>FIREBASE</h5>
            </article>
           

          </div>
          
          </div>
      </div>
  
      </section>
    )
  }

export default experience
