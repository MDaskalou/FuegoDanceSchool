import '../css/hero.css'
import { useState } from 'react'
import FAQ from './FAQ'
import { useNavigate } from 'react-router-dom'
import Button from './UI/Button/Button'
import Section from "./UI/Section/Section"
import { useTranslation } from 'react-i18next'

function Hero() {
    const [showFAQ, setShowFAQ] = useState(false)
    const navigate = useNavigate()
    const { t } = useTranslation('heroTranslation')

    return (
        <Section id="hero" className="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <div className="hero-text-box">
                        <h1 className="hero-title">{t("title")}</h1>
                        <p className="hero-subtitle">{t("subtitle")}</p>
                    </div>
                    <div className="hero-buttons">
                        <Button
                            onClick={() => navigate("/open-house-signup")}
                        >
                            {t("openHouseButton")}
                        </Button>

                        <Button
                            onClick={() => setShowFAQ(true)}
                            className="btn btn-small"
                        >
                            {t("faqButton")}
                        </Button>
                    </div>
                </div>
            </div>
            <FAQ visible={showFAQ} onClose={() => setShowFAQ(false)} />
        </Section>
    )
}

export default Hero
