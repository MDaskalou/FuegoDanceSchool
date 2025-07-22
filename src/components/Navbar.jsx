import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/navbar.css"; // Justera sökvägen vid behov
import logoImg from "../img/FuegoLogoimg.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaBook, FaTags, FaStar, FaUsers, FaHeart, FaQuestion } from 'react-icons/fa';
import usFlag from "../img/Flags/us.svg";
import seFlag from "../img/Flags/se.svg";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation("navbarTranslation");
    const currentLang = i18n.language;

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
    };

    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        console.log("KNAPP KLICKAD: Försöker scrolla till ->", sectionId);
        console.log("Nuvarande sökväg:", location.pathname);

        setIsMenuOpen(false);

        // Om vi redan är på startsidan, scrolla direkt
        if (location.pathname === "/") {
            console.log("Scrollar direkt på startsidan");

            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    console.log("Element hittades! Scrollar nu...");
                    console.log("Element position:", element.offsetTop);

                    // Testa först med scrollIntoView (enklare metod)
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Backup: justera för navbar efter scrolling
                    setTimeout(() => {
                        const navbarHeight = 70;
                        const currentScroll = window.pageYOffset;
                        window.scrollTo({
                            top: currentScroll - navbarHeight,
                            behavior: 'smooth'
                        });
                    }, 500);

                } else {
                    console.error(`Element med id="${sectionId}" hittades inte!`);
                }
            }, 100);

        } else {
            console.log("Navigerar till startsidan först");
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logoImg} alt="Logo" className="logo-img" />
                <div className="logo-heading-stacked">
                    <div className="logo-text-serif">Fuego </div>
                    <div className="handwrite-text">Dance School</div>
                </div>
            </div>

            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </button>

            <div className={`nav-wrapper`}>
                <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <ul>
                        {/* UPPDATERAD: Tillbaka till <button> för tillgänglighet */}
                        <li>
                            <button className="nav-link" onClick={() => scrollToSection("heroreel")}>
                                <FaHome className="icon" /> {t("nav.home")}
                            </button>
                        </li>

                        {/* UPPDATERAD: Tillbaka till <button> */}
                        <li>
                            <button className="nav-link" onClick={() => scrollToSection("schedule")}>
                                <FaCalendarAlt className="icon" /> {t("nav.schedule")}
                            </button>
                        </li>

                        {/* UPPDATERAD: Tillbaka till <button> med CTA-klass */}
                        <li>
                            <button className="nav-link nav-link-cta" onClick={() => scrollToSection("courses")}>
                                <FaBook className="icon" /> {t("nav.courses")}
                            </button>
                        </li>

                        {/* UPPDATERAD: Tillbaka till <button> */}
                        <li>
                            <button className="nav-link" onClick={() => scrollToSection("prices")}>
                                <FaTags className="icon" /> {t("nav.prices")}
                            </button>
                        </li>

                        {/* UPPDATERAD: Tillbaka till <button> */}
                        <li>
                            <button className="nav-link" onClick={() => scrollToSection("events")}>
                                <FaStar className="icon" /> {t("nav.events")}
                            </button>
                        </li>

                        {/* Dessa använder NavLink och är korrekta som de är */}
                        <li>
                            <NavLink to="/instructors" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                <FaUsers className="icon" /> {t("nav.instructors")}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/values" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                <FaHeart className="icon" /> {t("nav.values")}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/FAQpage" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                <FaQuestion className="icon" /> {t("nav.faq")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="language-switcher">
                {currentLang === "sv" && (
                    <img src={usFlag} alt="English" className="flag-icon" onClick={() => handleLanguageChange("en")} />
                )}
                {currentLang === "en" && (
                    <img src={seFlag} alt="Svenska" className="flag-icon" onClick={() => handleLanguageChange("sv")} />
                )}
            </div>
        </nav>
    );
}

export default Navbar;