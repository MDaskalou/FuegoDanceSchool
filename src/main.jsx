// src/components/Main.jsx
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import './i18n';


import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Courses from './components/Courses';
import Schedule from './components/Schedule';
import Prices from './components/Prices';
import Events from './components/Events';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import HeroReel from "./components/HeroReel";

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
            <HeroReel />
            <main className="main-content">
                <FAQ />
                <AboutUs />
                <Schedule/>
                <Courses />
                <Prices />
                <Events />
                <Reviews />
                <Contact />
            </main>
        </>
    );
}

export default Main;
