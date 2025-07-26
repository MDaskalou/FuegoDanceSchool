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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
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

                {/* --- ÄNDRINGEN ÄR HÄR --- */}
                {/* Kartan FÖRST */}
                <div className="contact-map">
                    <iframe
                        title="Google Maps"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2134.197022137151!2d11.942735677353174!3d57.69747207402124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff5a7703310e7%3A0x23d0b764a43b2f81!2sFuego%20Dance%20School!5e0!3m2!1ssv!2sse!4v1722005085448!5m2!1ssv!2sse"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Formuläret SEDAN */}
                <div className="contact-form-container">
                    <SectionTitle color="white">{t("contactTitle")}</SectionTitle>
                    <p className="contact-subtitle">{t("contactSubtitle")}</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder={t("namePlaceholder")}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t("emailPlaceholder")}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder={t("messagePlaceholder")}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <Button type="submit">{t("sendButton")}</Button>
                    </form>

                    {showModal && <SuccessMessangerModal onClose={() => setShowModal(false)} />}
                </div>
                {/* --- SLUT PÅ ÄNDRING --- */}

            </div>
        </Section>
    );
}

export default Contact;