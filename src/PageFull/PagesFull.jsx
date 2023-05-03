import React from 'react';

import { FullPagesStyle } from './PagesFullStyle';

//pages
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import Description from '../Pages/Description/Description';
import Techs from '../Pages/Techs/Techs';
import About from '../Pages/About/About';
import Projects from '../Pages/Projects/Projects';
import Contact from '../Pages/Contact/Contact';

const PageFull = () => {
    return ( 

        <FullPagesStyle>
            <Header/>
            <Description />
            <About/>
            <Projects/>
            <Techs />
            <Contact />
            <Footer/>
        </FullPagesStyle> 
    
    );
}
 
export default PageFull;