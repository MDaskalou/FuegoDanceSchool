import '../css/hero.css'
import {useState} from 'react'
import FAQ from './FAQ'
import LinkButton from './UI/Button/LinkButton'
import Button from './UI/Button/Button'
import Section   from "./UI/Section/Section";


function Hero() {
    const [showFAQ, setShowFAQ] = useState(false);


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
                        <LinkButton href="#" className="btn btn-small">Anmäl er till öppet hus</LinkButton>
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