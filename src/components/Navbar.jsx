import '../css/navbar.css';
import logo from '../img/FuegoLogoimg.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const menuItems = [
        { label: 'Hem', id: 'hero' },
        { label: 'Kurser', id: 'courses' },
        { label: 'Priser', id: 'prices' },
        { label: 'Event', id: 'events' },
        { label: 'Instruktörer', path: '/instructors' },
        { label: 'Våra värderingar', path: '/values' },
        { label: 'Vanliga frågor', path: '/FAQpage' },
        { label: 'Kontakt', id: 'contact' },
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
            </div>
        </nav>
    );
}

export default Navbar;
