// src/components/OpenHouseSignup.jsx
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Card from "./UI/Card/Card";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";
import Label from "./UI/Label/Label";
import Textarea from "./UI/TextArea/TextArea";
import Select from "./UI/Select/Select";
import "../css/signopenhouse.css";
import { useToast } from "./UI/Toast/ToastContext";
import SectionTitle from "./UI/SectionTitle";
import ConfirmationModal from "./UI/ConfirmationModal/ConfirmationModal";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRgi2q5pb8g3CgKRQUe-8yoSTgS78xX1BS9OLHhJoad_0rhgGIvi1M1Jsb-Kng_rUV3A/exec";
export default function OpenHouseSignup() {
    const { t } = useTranslation('openHouseTranslation');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const initialState = { name: "", email: "", personnummer: "", role: "", source: "", message: "" };
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        Object.keys(form).forEach(key => formData.append(key, form[key]));

        try {
            const response = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
            const result = await response.json();

            if (result.result === "success") {
                setForm(initialState);
                setIsModalOpen(true);
            } else {
                console.error("Fel från Google Script:", result.error);
                throw new Error("Formuläret kunde inte skickas på grund av ett serverfel.");
            }
        } catch (error) {
            console.error("Fel vid skick:", error);
            showToast("Fel vid skick: " + error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    // Hämta listor från JSON för att göra koden renare
    const roleOptions = t('roleOptions', { returnObjects: true }) || [];
    const sourceOptions = t('sourceOptions', { returnObjects: true }) || [];

    return (
        <>
            <section id="oppet-hus" className="py-16 scroll-mt-24">
                <Card className="max-w-xl mx-auto p-6">
                    <SectionTitle color="white">{t('signupTitle')}</SectionTitle>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">{t('labelName')}</Label>
                            <Input id="name" name="name" required value={form.name} onChange={handleChange("name")}/>
                        </div>
                        <div>
                            <Label htmlFor="email">{t('labelEmail')}</Label>
                            <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange("email")}/>
                        </div>
                        <div>
                            <Label htmlFor="personnummer">{t('labelSsn')}</Label>
                            <Input id="personnummer" name="personnummer" placeholder={t('placeholderSsn')} pattern="^\\d{6}(\\d{2})?[-]?\\d{4}$" required value={form.personnummer} onChange={handleChange("personnummer")}/>
                        </div>
                        <div>
                            <Label htmlFor="role">{t('labelRole')}</Label>
                            <Select id="role" name="role" value={form.role} onChange={(v)=> setForm(p => ({...p, role: v}))} options={roleOptions} placeholder={t('placeholderSelect')} required />
                        </div>
                        <div>
                            <Label htmlFor="source">{t('labelSource')}</Label>
                            <Select id="source" name="source" value={form.source} onChange={(v)=> setForm(p => ({...p, source: v}))} options={sourceOptions} placeholder={t('placeholderSelect')} required />
                        </div>
                        <div>
                            <Label htmlFor="message">{t('labelMessage')}</Label>
                            <Textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange("message")}/>
                        </div>

                        <Button type="submit" disabled={loading}>
                            {loading ? t('buttonSubmitting') : t('buttonSubmit')}
                        </Button>
                    </form>

                    <p className="signup-info">
                        {t('infoFirstComeLine1')} <br />
                        {t('infoFirstComeLine2')}
                    </p>
                    <div className="signup-book">
                        <a href="https://app.coursely.se/activities/FuegoDance" aria-label="Boka en plats">
                            {t('infoBookButton')}
                        </a>
                    </div>
                </Card>
            </section>

            // I OpenHouseSignup.jsx

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={t('modalTitle')}
            >
                {/* NY STRUKTUR HÄR: */}
                <div className="modal-layout-container">

                    {/* Vänster kolumn */}
                    <div className="modal-column">
                        <p>{t('modalSuccessMessage')}</p>
                        <p style={{ marginTop: '1rem' }}>{t('modalClosingMessage')}</p>
                    </div>

                    {/* Höger kolumn */}
                    <div className="modal-column">
                        <strong>{t('eventDetailsTitle')}</strong>
                        <ul>
                            <li>{t('date')}</li>
                            <li>{t('time')}</li>
                            <li>{t('location')}</li>
                            <li>{t('whatToWear')}</li>
                        </ul>
                    </div>

                </div>
            </ConfirmationModal>
        </>
    );
}