import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Importera dina sektions-komponenter
import HeroReel from './components/HeroReel';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Prices from './components/Prices';
import Events from './components/Events';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Schedule from './components/Schedule';

function Main() {
    const location = useLocation();
    const navigate = useNavigate();

    // Hantera scrollning efter navigation från andra sidor
    useEffect(() => {
        if (location.state?.scrollTo) {
            console.log("Navigerat från annan sida, ska scrolla till:", location.state.scrollTo);

            // Vänta längre för att säkerställa att allt är laddat
            const scrollToElement = (targetId, attempts = 0) => {
                const element = document.getElementById(targetId);

                if (element) {
                    console.log("Element hittades efter", attempts, "försök. Scrollar nu!");

                    // Använd scrollIntoView som fungerar bättre efter navigation
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });

                    // Rensa state efter scrollning
                    setTimeout(() => {
                        navigate(location.pathname, { replace: true, state: {} });
                    }, 1000);

                } else if (attempts < 10) {
                    // Försök igen om elementet inte finns än (max 10 försök = 2 sekunder)
                    console.log("Element finns inte än, försöker igen om 200ms... (försök", attempts + 1, "/10)");
                    setTimeout(() => scrollToElement(targetId, attempts + 1), 200);
                } else {
                    console.error(`Element med id="${targetId}" hittades aldrig efter 10 försök!`);
                    // Rensa state även om scrollning misslyckades
                    navigate(location.pathname, { replace: true, state: {} });
                }
            };

            // Starta scroll-försöken efter en initial delay
            setTimeout(() => scrollToElement(location.state.scrollTo), 500);
        }
    }, [location.state?.scrollTo, navigate, location.pathname]);

    return (
        <>
            {/* Använd vanliga div med id istället för Element */}
            <div id="heroreel">
                <HeroReel />
            </div>

            <div id="aboutus">
                <AboutUs />
            </div>

            <div id="schedule">
                <Schedule />
            </div>

            <div id="courses">
                <Courses />
            </div>

            <div id="prices">
                <Prices />
            </div>

            <div id="events">
                <Events />
            </div>

            <div id="reviews">
                <Reviews />
            </div>


            <div id="contact">
                <Contact />
            </div>
        </>
    );
}

export default Main;