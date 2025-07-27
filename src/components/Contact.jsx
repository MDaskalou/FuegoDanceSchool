import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import "../css/contact.css";
import Button from './UI/Button/Button';
import Section from './UI/Section/Section';
import { useToast } from "./UI/Toast/ToastContext";
import emailjs from '@emailjs/browser';
import SuccessMessangerModal from './UI/SuccessMessangerModal/SuccessMessangerModal';
import SectionTitle from './UI/SectionTitle';

function Contact() {
    const { t } = useTranslation("contactTranslation");
    const { showToast } = useToast();
    const formRef = useRef();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            showToast(t("formSuccess"), "success");
            setFormData({ name: '', email: '', message: '' });
            setShowModal(true);
            setTimeout(() => setShowModal(false), 3000);
        });
    };

    return (
        <Section id="contact" className="contact-section">
            <div className="contact-wrapper">
                <div className="contact-map">
                    {/* === FIX 1: UPPDATERAD IFRAME-URL === */}
                    <iframe
                        title="Google Maps Location for Fuego Dance School"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2133.18984511686!2d11.973877676875782!3d57.679252673857626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff307d8735c63%3A0x72c3c9d3fb7ca36f!2sDoktor%20Westrings%20Gata%2014D%2C%20413%2024%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1753657987192!5m2!1ssv!2sse"
                        style={{ border:0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="contact-form-container">
                    <SectionTitle color="white">{t("contactTitle")}</SectionTitle>
                    <p className="contact-subtitle">{t("contactSubtitle")}</p>

                    {/* === FIX 2: TILLAGD KONTAKTINFORMATION === */}
                    <div className="contact-details">
                        <div className="contact-info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Doktor Westrings Gata 14D</span>
                        </div>
                        <div className="contact-info-item">
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@fuegodanceschool.se">info@fuegodanceschool.se</a>
                        </div>
                    </div>

                    {/* === FIX 3: TILLAGDA SOCIALA IKONER === */}
                    <div className="contact-socials">
                        <a href="https://www.instagram.com/fuegodanceschool/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/FuegoDSchool" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                        <input type="text" name="name" placeholder={t("namePlaceholder")} value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder={t("emailPlaceholder")} value={formData.email} onChange={handleChange} required />
                        <textarea name="message" placeholder={t("messagePlaceholder")} value={formData.message} onChange={handleChange} required></textarea>
                        <Button type="submit">{t("sendButton")}</Button>
                    </form>

                    {showModal && <SuccessMessangerModal onClose={() => setShowModal(false)} />}
                </div>
            </div>
        </Section>
    );
}

export default Contact;