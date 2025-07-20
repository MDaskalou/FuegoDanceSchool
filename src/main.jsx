
// Importera bara de komponenter du faktiskt använder här
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