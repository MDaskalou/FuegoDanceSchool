// src/components/Main.jsx
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

import Hero from './Hero';
import FAQ from './FAQ';
import Courses from './Courses';
import Schedule from './Schedule';    
import Prices from './Prices';
import Events from './Events';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Reviews from './Reviews';

function Main() {
    useEffect(() => {
        const scrollTo = sessionStorage.getItem('scrollTo');
        if (scrollTo) {
            setTimeout(() => {
                console.log('Scrolling to:', scrollTo); // Debug
                scroller.scrollTo(scrollTo, {
                    smooth: true,
                    duration: 600,
                    offset: -70,
                });
                sessionStorage.removeItem('scrollTo');
            }, 500); // Öka delay
        }
    }, []);

    return (
        <>
            <Hero />
            <FAQ />
            <Schedule/>
            <AboutUs />
            <Courses />
            <Prices />
            <Events />
            <Reviews />
            <Contact />
            
        </>
    );
}

export default Main;
