import '../css/navbar.css';
import logo from '../img/FuegoLogoimg.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Hem', id: 'hero' },
        { label: 'Kurser', id: 'courses' },
        { label: 'Priser', id: 'prices' },
        { label: 'Instruktörer', path: '/instructors' },
        { label: 'Event', id: 'events' },
        { label: 'Våra värderingar', path: '/values' }, 

        { label: 'Kontakt', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        console.log('Trying to scroll to:', id);

        if (location.pathname !== '/') {
            sessionStorage.setItem('scrollTo', id);
            navigate('/');
        } else {
            const element = document.getElementById(id);
            console.log('Found element:', element);

            if (element) {
                const navbarHeight = 70;
                const elementPosition = element.offsetTop - navbarHeight;

                console.log('Current scroll position:', window.scrollY);
                console.log('Target position:', elementPosition);
                console.log('Element offsetTop:', element.offsetTop);

                // Använd både scrollTo och scrollIntoView för bättre kompatibilitet
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Justera för navbar efter scrollIntoView
                setTimeout(() => {
                    window.scrollBy({
                        top: -navbarHeight,
                        behavior: 'smooth'
                    });
                }, 100);

            } else {
                console.error(`Element with id "${id}" not found`);
            }
        }
        setMenuOpen(false);
    };

    // Hantera scroll efter navigation
    useEffect(() => {
        const scrollTarget = sessionStorage.getItem('scrollTo');
        if (scrollTarget && location.pathname === '/') {
            setTimeout(() => {
                const element = document.getElementById(scrollTarget);
                if (element) {
                    console.log('Scrolling after navigation to:', scrollTarget);

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
            <div className="logo-container">
                <img
                    src={logo}
                    alt="Fuego Dance School Logo"
                    className="logo-img"
                />

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
            >
                ☰
            </button>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
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
        </nav>
    );
}

export default Navbar;