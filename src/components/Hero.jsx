import '../css/hero.css'
import {useState} from 'react'
import FAQ from './FAQ'

function Hero() {
    const [showFAQ, setShowFAQ] = useState(false);


    return (
        <section className="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <div className="hero-text-box">
                    <h1 className="hero-title">Det började med ett steg...</h1>
                    <p className="hero-subtitle">Här börjar din resa i Bachata Sensual – oavsett om du är nybörjare eller avancerad.
                    </p>
                    </div>
                    <div className="hero-buttons">
                        <a href="#" className="hero-button">Anmäl er till öppet hus</a>
                        <button className="hero-button faq-trigger" onClick={() => setShowFAQ(true)}>
                            Vanliga frågor
                        </button>
                    </div>
                </div>
            </div>
            <FAQ visible={showFAQ} onClose={() => setShowFAQ(false)} />

        </section>

)
}

export default Hero;