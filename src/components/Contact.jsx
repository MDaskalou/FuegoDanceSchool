import React from 'react'; // Viktigt att React är importerad
import { useTranslation } from "react-i18next"; // Importera useTranslation
import "../css/contact.css";
import Button from './UI/Button/Button';
import Section from './UI/Section/Section'; // Antar att Section är en UI-komponent du använder

function Contact() {
    const { t } = useTranslation("contactTranslation"); // Använd 'translation' namespace

    return (
        <Section id="contact" className="contact-section">
            <div className="contact-wrapper">
                <div className="contact-map">
                    <iframe
                        title={t("mapTitle", { ns: 'contactTranslation' })} // Översätt kartans titel
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2115.820228206527!2d11.93919341616403!3d57.70589698111757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3618a312f6f%3A0x891f6b7bdf2b5f3f!2sDoktor%20Westrings%20Gata%2014D%2C%20413%2024%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1684912761332"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="contact-form-container">
                    <h2 className="contact-title">{t("contactTitle", { ns: 'contactTranslation' })}</h2>
                    <p className="contact-subtitle">{t("contactSubtitle", { ns: 'contactTranslation' })}</p>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        {/* Använd översatta platshållare */}
                        <input type="text" name="name" placeholder={t("namePlaceholder", { ns: 'contactTranslation' })} required />
                        <input type="email" name="email" placeholder={t("emailPlaceholder", { ns: 'contactTranslation' })} required />
                        <textarea name="message" placeholder={t("messagePlaceholder", { ns: 'contactTranslation' })} required></textarea>
                        {/* Översätt knapptexten */}
                        <Button type="submit">{t("sendButton", { ns: 'contactTranslation' })}</Button>
                    </form>

                    <div className="contact-icons">
                        <a href="https://www.instagram.com/fuegodanceschool/" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/FuegoDSchool" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>

                    <div className="contact-info">
                        {/* Använd översatta etiketter */}
                        <p><strong>{t("emailInfo", { ns: 'contactTranslation' })}</strong> info@fuegodanceschool.com</p>
                        <p><strong>{t("addressInfo", { ns: 'contactTranslation' })}</strong> Doktor Westrings Gata 14D, Göteborg</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Contact;