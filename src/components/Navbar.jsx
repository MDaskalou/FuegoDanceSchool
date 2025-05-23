    import '../css/navbar.css'; // eller './Navbar.css' om CSS ligger i samma mapp
    import logo from '../img/FuegoLogoimg.png'; // Importera logotypen
    import{ useEffect, useState, useRef } from 'react';
    import { Link } from "react-router-dom";
    import { Link as ScrollLink } from 'react-scroll';
    import {useLocation} from 'react-router-dom';
    
    
    
    
    function Navbar() {
        const [isVisible, setIsVisible] = useState(true);
        const lastScrollY = useRef(0);
        const location = useLocation();
        const isMainPage = location.pathname === '/'; // Kolla om vi är på startsidan
    
        // 👇 Det här är din scroll-lyssnare
        useEffect(() => {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                console.log("ScrollY:", currentScrollY); // 👈 denna bör uppdateras vid scroll

                if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

                if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }

                lastScrollY.current = currentScrollY;
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        // 👇 Detta är för loggning – helt separat useEffect
        useEffect(() => {
            console.log("Navbar visibility:", isVisible);
        }, [isVisible]);
    
    
    
        return (
            <header className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
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
                    
                    <nav className="nav-links">
                        <ul>
                            {isMainPage ? (
                                <>
                            <li><ScrollLink to="hero" smooth={true} duration={600} offset={-100} className="scroll-link">Hem</ScrollLink></li>
                            <li><ScrollLink to="courses" smooth={true} duration={600} offset={-100} className="scroll-link">Kurser</ScrollLink></li>
                            <li><ScrollLink to="prices" smooth={true} duration={600} offset={-100} className="scroll-link">Priser</ScrollLink></li>
                            <li><Link to="/instrutors">Instruktörer</Link></li>
                            <li><ScrollLink to="events" smooth={true} duration={600} offset={-100} className="scroll-link">Event</ScrollLink></li>
                            <li><ScrollLink to="contact" smooth={true} duration={600} offset={-100} className="scroll-link">Kontakt</ScrollLink></li>
                            </>
                                ):(
                                <>
                                    <li><Link to="/">Tillbaka till startsidan</Link></li>
                                </>
                            )}
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
