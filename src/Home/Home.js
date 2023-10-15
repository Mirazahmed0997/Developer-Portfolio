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


const Home = () => {
    return (
        <div style={{ background: `url(${background})` }}>
            <Header></Header>
            <Intro></Intro>
            <About></About>
            <Technoligies></Technoligies>
            <Academic></Academic>
            {/* <Details></Details> */}
            <Experience></Experience>
            <Footer></Footer>
        </div>
    );
};

export default Home;