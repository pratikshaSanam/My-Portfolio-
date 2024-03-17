import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'

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
     
     
       
       <Contact/>
       <Footer/>

       
        </>
    );
}

export default App;


