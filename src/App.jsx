import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testomonial from './components/testomonial/testomonial'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import Project from './components/projects/project';


const App = () => {
    return (
        <>
       <Header/>
       <Nav/>
       <About/>
    
       <Experience/>
       <Project/>
     
     
       {/* <Services/>
       <Portfolio/>
      <Testomonial/>
       <Footer/> */}
       <Contact/>
       <Footer/>

       
        </>
    );
}

export default App;


