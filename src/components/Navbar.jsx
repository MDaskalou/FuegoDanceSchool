import '../css/navbar.css'; // eller './Navbar.css' om CSS ligger i samma mapp
import logo from '../img/FuegoLogoimg.png'; // Importera logotypen
import{ useEffect, useState } from 'react';
import { Link } from "react-router-dom";



function Navbar() {
    const[isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.scrollY;
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {     
                setIsVisible(false); //scrolla ner
            } else {
                setIsVisible(true);//scrolla upp
            }
            lastScrollY = window.scrollY;
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        
    }, []);
    
    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* ✅ Allt detta ligger i logo-container */}
                <div className="logo-container">
                    <img src={logo} alt="FuegoLogo" className="logo-img" />
                    <h1 className="logo-heading-stacked">
                        <span className="logo-text-serif">Fuego</span>
                        <br/>
                        <span className="handwrite-text"> 
          {
              "Dance School".split("").map((char, i) => (
                  <span key={i} className="char" style={{ animationDelay: `${i * 0.1}s` }}>
                {char}
              </span>
              ))
          }
        </span>
                    </h1>
                </div>

                {/* ✅ Meny i mitten */}
                <nav className="nav-links">
                    <ul>
                        <li><Link to="/">Hem</Link></li>
                        
                        <li><a href="#courses">Kurser</a></li>
                        <li><a href="#prices">Priser</a></li>
                        <li><Link to="/instrutors">Instruktörer</Link></li>
                        <li><a href="#events">Event</a></li>
                        <li><a href="#contact">Kontakt</a></li>

                    </ul>
                </nav>

                {/* ✅ Osynlig spacer för balans */}
                <div className="nav-spacer"></div>

                <div className="icon-container">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>

            </div>
        </header>


    );
}

export default Navbar;
