// src/components/Contact.jsx
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import "../css/contact.css";
import Button from './UI/Button/Button';
import Section from './UI/Section/Section';
import { useToast } from "./UI/Toast/ToastContext"; // Importera för notiser

function Contact() {
    const { t } = useTranslation("contactTranslation");
    const { showToast } = useToast(); // Hook för att visa notiser

    // State för att hålla reda på formulärdata
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Funktion för att formatera datan för Netlify
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    // Funktion som körs när formuläret skickas
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                showToast(t("formSuccess"), "success"); // Visa framgångsnotis
                setFormData({ name: '', email: '', message: '' }); // Rensa formuläret
            })
            .catch(error => {
                showToast(t("formError"), "error"); // Visa felnotis
                console.error(error);
            });
    };

    return (
        <Section id="contact" className="contact-section">
            <div className="contact-wrapper">
                <div className="contact-map">
                    <iframe
                        title={t("mapTitle")}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2112.930101957242!2d11.942718116016625!3d57.70779788118086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff31c07a51803%3A0x8e831f2f1e63a3d6!2sDoktor%20Westrings%20gata%2014d%2C%20413%2027%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1690223798481!5m2!1ssv!2sse"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="contact-form-container">
                    <h2 className="contact-title">{t("contactTitle")}</h2>
                    <p className="contact-subtitle">{t("contactSubtitle")}</p>

                    {/* VIKTIGT: Formuläret med Netlify-attribut */}
                    <form
                        name="contact"
                        className="contact-form"
                        onSubmit={handleSubmit}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        {/* Dold input som talar om för Netlify vilket formulär det är */}
                        <input type="hidden" name="form-name" value="contact" />
                        {/* Dold input för att lura spam-bots */}
                        <p style={{ display: 'none' }}>
                            <label>
                                Don’t fill this out if you’re human: <input name="bot-field" />
                            </label>
                        </p>

                        <input type="text" name="name" placeholder={t("namePlaceholder")} value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder={t("emailPlaceholder")} value={formData.email} onChange={handleChange} required />
                        <textarea name="message" placeholder={t("messagePlaceholder")} value={formData.message} onChange={handleChange} required></textarea>

                        <Button type="submit">{t("sendButton")}</Button>
                    </form>

                    <div className="contact-icons">
                        {/* ... dina sociala ikoner ... */}
                    </div>

                    <div className="contact-info">
                        <p><strong>{t("emailInfo")}</strong> info@fuegodanceschool.se</p>
                        <p><strong>{t("addressInfo")}</strong> Doktor Westrings Gata 14D, Göteborg</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Contact;