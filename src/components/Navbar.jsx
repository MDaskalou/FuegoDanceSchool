import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../css/navbar.css";
import logoImg from "../img/FuegoLogoimg.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaBook, FaTags, FaStar, FaUsers, FaHeart, FaQuestion } from "react-icons/fa";

/* --- Hook: hide navbar on scroll down, show on scroll up --- */
function useHideOnScroll(offset = 80) {
    const [hidden, setHidden] = useState(false);
    const lastY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const goingDown = y > lastY.current;
            setHidden(goingDown && y > offset);
            lastY.current = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [offset]);

    return hidden;
}

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation("navbarTranslation");
    const currentLang = i18n.language;
    const navigate = useNavigate();
    const location = useLocation();
    const hidden = useHideOnScroll(80);
    const navRef = useRef(null);

    /* Body scroll-lock när menyn är öppen (mobil) */
    useEffect(() => {
        const { style } = document.documentElement; // <html>
        if (isMenuOpen) {
            style.overflow = "hidden";
        } else {
            style.overflow = "";
        }
        return () => { style.overflow = ""; };
    }, [isMenuOpen]);

    /* Stäng menyn vid routebyte och på ESC */
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const handleLanguageChange = (lng) => i18n.changeLanguage(lng);


    // src/components/Navbar.jsx

    const smoothScrollTo = (sectionId) => {
        setIsMenuOpen(false);

        const doScroll = () => {
            const el = document.getElementById(sectionId);
            if (el) {
                // Denna metod respekterar automatiskt 'scroll-margin-top: 80px'
                // som du redan har i din CSS. Ingen manuell beräkning behövs.
                el.scrollIntoView({ behavior: "smooth" });
            } else {
                // Bra att ha för felsökning om en ID är felstavad
                console.warn("Kunde inte hitta element att scrolla till:", sectionId);
            }
        };

        if (location.pathname === "/") {
            // Om vi REDAN är på startsidan, scrolla efter en kort fördröjning
            // för att garantera att allt hunnit renderas (t.ex. lazy-loading).
            setTimeout(doScroll, 50); // 50ms räcker oftast
        } else {
            // Om vi är på en ANNAN sida, navigera hem och skicka med ID:t.
            // Vår useEffect (nedan) kommer att ta över.
            navigate("/", { state: { scrollTo: sectionId } });
        }
    };

    /* Om startsidan öppnas med state.scrollTo, utför scroll */
    // src/components/Navbar.jsx

    /* Om startsidan öppnas med state.scrollTo, utför scroll */
    useEffect(() => {
        const { state } = location;
        if (state?.scrollTo) {
            const id = state.scrollTo;

            // Nollställ state direkt så det inte triggas igen
            navigate(location.pathname, { replace: true, state: {} });

            // Vänta 150ms för att ge React tid att byta sida och
            // rendera alla homepage-komponenter.
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.warn("Kunde inte hitta element (efter nav):", id);
                }
            }, 150); // En lite längre fördröjning för sidbyte
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, navigate]); // FIX: Lyssna efter ändringar i 'location'!

    return (
        <nav
            ref={navRef}
            className={`navbar ${hidden ? "navbar--hidden" : ""}`}
            role="navigation"
            aria-label="Main"
        >
            <div className="logo-container" onClick={() => navigate("/")}>
                <img src={logoImg} alt="Fuego logo" className="logo-img" />
                <div className="logo-heading-stacked" aria-label="Fuego Dance School">
                    <div className="logo-text-serif">Fuego </div>
                    <div className="handwrite-text">Dance School</div>
                </div>
            </div>

            {/* Språkknapp */}
            <button
                type="button"
                className="lang-switcher-btn"
                onClick={() => handleLanguageChange(currentLang === "sv" ? "en" : "sv")}
                aria-label={currentLang === "sv" ? "Switch to English" : "Byt till Svenska"}
            >
                {currentLang === "sv" ? "EN" : "SV"}
            </button>

            {/* Hamburgare */}
            <button
                className="menu-toggle"
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="main-nav"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? t("closeMenu", { defaultValue: "Close menu" }) : t("openMenu", { defaultValue: "Open menu" })}
            >
                ☰
            </button>

            <div className="nav-wrapper">
                <div className={`nav-links ${isMenuOpen ? "open" : ""}`} id="main-nav" role="menu">
                    <ul>
                        {/* Scrolla till sektioner på startsidan */}
                        <li>
                            <button className="nav-link" role="menuitem" onClick={() => smoothScrollTo("heroreel")}>
                                <FaHome className="icon" /> {t("nav.home")}
                            </button>
                        </li>
                        <li>
                            <button className="nav-link" role="menuitem" onClick={() => smoothScrollTo("schedule")}>
                                <FaCalendarAlt className="icon" /> {t("nav.schedule")}
                            </button>
                        </li>
                        <li>
                            <button className="nav-link nav-link-cta" role="menuitem" onClick={() => smoothScrollTo("courses")}>
                                <FaBook className="icon" /> {t("nav.courses")}
                            </button>
                        </li>
                        <li>
                            <button className="nav-link" role="menuitem" onClick={() => smoothScrollTo("prices")}>
                                <FaTags className="icon" /> {t("nav.prices")}
                            </button>
                        </li>
                        <li>
                            <button className="nav-link" role="menuitem" onClick={() => smoothScrollTo("events")}>
                                <FaStar className="icon" /> {t("nav.events")}
                            </button>
                        </li>

                        {/* Vanliga routes */}
                        <li>
                            <NavLink
                                to="/instructors"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                <FaUsers className="icon" /> {t("nav.instructors")}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/values"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                <FaHeart className="icon" /> {t("nav.values")}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/FAQpage"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                <FaQuestion className="icon" /> {t("nav.faq")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
