// src/components/Navbar.jsx (Komplett och fungerande version)
import '../css/navbar.css';
import logo from '../img/FuegoLogoimg.png';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation("navbarTranslation");

    const menuItems = [
        { label: t('nav.home'), id: 'heroreel' },
        { label: t('nav.courses'), id: 'courses' },
        { label: t('nav.prices'), id: 'prices' },
        { label: t('nav.events'), id: 'events' },
        { label: t('nav.instructors'), path: '/instructors' },
        { label: t('nav.values'), path: '/values' },
        { label: t('nav.faq'), path: '/FAQpage' },
        { label: t('nav.contact'), id: 'contact' },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const smoothScrollTo = (elementId) => {
        scroller.scrollTo(elementId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -70 // Offset för navbarens höjd
        });
        setMenuOpen(false);
    };

    const handleScrollLinkClick = (e, id) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            sessionStorage.setItem('scrollTo', id);
            navigate('/');
        } else {
            smoothScrollTo(id);
        }
    };

    // Denna useEffect hanterar scrollningen efter att man har navigerat hem
    useEffect(() => {
        const scrollTarget = sessionStorage.getItem('scrollTo');
        if (scrollTarget && location.pathname === '/') {
            setTimeout(() => {
                smoothScrollTo(scrollTarget);
                sessionStorage.removeItem('scrollTo');
            }, 100); // Liten delay för att sidan ska hinna rendera
        }
    }, [location.pathname]); // VIKTIGT: Körs varje gång sidans sökväg ändras

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav className="navbar">
            <div className="nav-inner">
                <div className="logo-container">
                    <img src={logo} alt="Fuego Dance School Logo" className="logo-img" />
                    <div className="logo-heading-stacked">
                        <div className="logo-text-serif">Fuego</div>
                        <div className="handwrite-text">
                            {"Dance School".split("").map((char, i) => (
                                <span key={i}>{char}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Stäng menyn" : "Öppna menyn"}
                    aria-expanded={menuOpen}
                >
                    ☰
                </button>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        {menuItems.map((item, i) => (
                            <li key={i}>
                                {item.path ? (
                                    <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setMenuOpen(false)}>
                                        {item.label}
                                    </NavLink>
                                ) : (
                                    <a href={`#${item.id}`} className="nav-link" onClick={(e) => handleScrollLinkClick(e, item.id)}>
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="language-switcher">
                    {i18n.language === 'sv' ? (
                        <button className="lang-button" onClick={() => changeLanguage('en')} title="Switch to English" aria-label="Switch to English">
                            <img src="/flag/us.svg" alt="USA Flag" className="flag-icon" />
                        </button>
                    ) : (
                        <button className="lang-button" onClick={() => changeLanguage('sv')} title="Byt till svenska" aria-label="Byt till svenska">
                            <img src="/flag/se.svg" alt="Swedish Flag" className="flag-icon" />
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;