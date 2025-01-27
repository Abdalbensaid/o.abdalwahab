import React from "react"; 
import Header from './components/Header';
import Home from './components/Home';
import EducationExperience from './components/EducationExperience';
import About from './components/About';
// import AboutSection from './components/AboutSection';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/Home.css'; 
import './styles/EducationExperience.css'; 
import './styles/App.css';
import './styles/header.css';
import './styles/About.css';
// import './styles/AboutSection.css';
import './styles/Contact.css';
import './styles/Footer.css';
import './styles/Works.css';


const Index = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            {/* <AboutSection /> */}
            <EducationExperience />
            <Works />
            <Contact />
            <Footer />

        </div>
    );
}
export default Index