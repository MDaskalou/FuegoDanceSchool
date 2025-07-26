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
                <div className="contact-map">
                    <iframe
                        title="Google Maps"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68262.12540741275!2d11.894052670130037!3d57.67922592869809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff333fb246001%3A0x4dac4bbc34026a14!2sBachata%20I%20Dansskola%20I%20Fuego%20Dance%20School!5e0!3m2!1ssv!2sse!4v1753542122522!5m2!1ssv!2sse"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="contact-form-container">
                    <SectionTitle color="white">{t("contactTitle")}</SectionTitle>
                    {/* DEN KORRIGERADE RADEN ÄR HÄR */}
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
            </div>
        </Section>
    );
}

export default Contact;