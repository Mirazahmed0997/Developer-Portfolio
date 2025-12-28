import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import background from '../utilities/backround-transformed.jpeg'
import Technoligies from './Technoligies';
import Academic from './Academic';
import Details from './Details';
import Footer from './Footer';
import Experience from './Experience';
import HeroSection from './HeroSection';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import AcademicHistory from './AcademicHistory';


const Home = () => {
    return (
        <div >
            <HeroSection></HeroSection>
            <About></About>
            <Skills></Skills>
            <AcademicHistory></AcademicHistory>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;