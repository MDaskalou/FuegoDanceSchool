import '../css/hero.css'
import {useState} from 'react'
import FAQ from './FAQ'
import { useNavigate } from 'react-router-dom'
import Button from './UI/Button/Button'
import Section from "./UI/Section/Section";


function Hero() {
    const [showFAQ, setShowFAQ] = useState(false);
    const navigate = useNavigate(); // Lägg till denna rad!

    return (
        <Section id="hero" className="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <div className="hero-text-box">
                        <h1 className="hero-title">Det började med ett steg...</h1>
                        <p className="hero-subtitle">Här börjar din resa i Bachata Sensual – oavsett om du är nybörjare eller avancerad.
                        </p>
                    </div>
                    <div className="hero-buttons">
                        <Button
                            onClick={() => navigate("/open-house-signup")}
                            className="btn btn-small"
                        >
                            Anmäl dig till öppet hus
                        </Button>

                        <Button onClick={() => setShowFAQ(true)} className="btn btn-small">
                            Vanliga frågor
                        </Button>
                    </div>
                </div>
            </div>
            <FAQ visible={showFAQ} onClose={() => setShowFAQ(false)} />
        </Section>
    )
}

export default Hero;