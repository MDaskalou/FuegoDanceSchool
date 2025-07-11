import '../css/navbar.css';
import logo from '../img/FuegoLogoimg.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { t, i18n } = useTranslation();


    const menuItems = [
        { label: t('nav.home'), id: 'hero' },
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
            const newIsMobile = window.innerWidth < 768;
            setIsMobile(newIsMobile);
            if (!newIsMobile) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            sessionStorage.setItem('scrollTo', id);
            navigate('/');
        } else {
            const element = document.getElementById(id);
            const navbarHeight = 70;
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                setTimeout(() => {
                    window.scrollBy({
                        top: -navbarHeight,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        const scrollTarget = sessionStorage.getItem('scrollTo');
        if (scrollTarget && location.pathname === '/') {
            setTimeout(() => {
                const element = document.getElementById(scrollTarget);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    setTimeout(() => {
                        window.scrollBy({
                            top: -70,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
                sessionStorage.removeItem('scrollTo');
            }, 500);
        }
    }, [location.pathname]);

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

                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <div className="nav-wrapper">
                    <div className={`nav-links ${menuOpen && isMobile ? 'open' : ''}`}>
                        <ul>
                            {menuItems.map((item, i) => (
                                <li key={i}>
                                    {item.path ? (
                                        <a
                                            href={item.path}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate(item.path);
                                                setMenuOpen(false);
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(item.id);
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 🌍 Språkväxlare */}
                <div className="language-switcher">
                    {i18n.language === 'sv' ? (
                        <img
                            src="/flag/us.svg"
                            alt="Switch to English"
                            className="flag-icon"
                            onClick={() => i18n.changeLanguage('en')}
                            title="Switch to English"
                        />
                    ) : (
                        <img
                            src="/flag/se.svg"
                            alt="Byt till svenska"
                            className="flag-icon"
                            onClick={() => i18n.changeLanguage('sv')}
                            title="Byt till svenska"
                        />
                    )}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
