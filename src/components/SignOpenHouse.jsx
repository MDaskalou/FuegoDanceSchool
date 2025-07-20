// src/components/SignOpenHouse.jsx
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
    const initialState = { name: "", email: "", interestedCourses: {}, role: "", source: "", message: "" };
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setForm((prev) => {
            const newInterestedCourses = {
                ...prev.interestedCourses,
                [name]: checked,
            };
            // LOGG 1: Se exakt vad det nya state-objektet för kurser innehåller
            console.log('Checkbox ändrad! Nytt interestedCourses-objekt:', newInterestedCourses);
            return {
                ...prev,
                interestedCourses: newInterestedCourses,
            };
        });
    };
    // Ersätt hela din handleSubmit-funktion med denna nya version

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // LOGG 2: Hur ser hela "form"-objektet ut precis när vi klickar på Skicka?
        console.log('--- Startar handleSubmit ---');
        console.log('Hela form-state vid submit:', form);

        const interestedCoursesString = Object.keys(form.interestedCourses)
            .filter(key => form.interestedCourses[key])
            .join(', ');

        // LOGG 3: Vad blev den färdiga strängen?
        console.log('Den skapade strängen av kursval:', interestedCoursesString);

        const dataToSend = {
            name: form.name,
            email: form.email,
            interestedcourses: interestedCoursesString,
            role: form.role,
            source: form.source,
            message: form.message
        };

        // LOGG 4: Hur ser det slutgiltiga objektet ut som vi skickar?
        console.log('Slutgiltigt objekt som skickas som JSON:', dataToSend);
        console.log('---------------------------');

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                redirect: "follow",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(dataToSend)
            });
            const result = await response.json();
            if (result.result === "success") {
                setForm(initialState);
                setIsModalOpen(true);
            } else {
                console.error("Fel från Google Script:", result.error);
                showToast("Formuläret kunde inte skickas.", "error");
            }
        } catch (error) {
            console.error("Fel vid skick:", error);
            showToast("Fel vid skick: " + error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const roleOptions = t('roleOptions', { returnObjects: true }) || [];
    const sourceOptions = t('sourceOptions', { returnObjects: true }) || [];
    const courseOptions = t('interestedCoursesOptions', { returnObjects: true }) || [];

    return (
        <>
            <section id="oppet-hus" className="py-16 scroll-mt-24">
                <Card className="max-w-xl mx-auto p-6">
                    <SectionTitle color="white">{t('signupTitle')}</SectionTitle>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div><Label htmlFor="name">{t('labelName')}</Label><Input id="name" name="name" required value={form.name} onChange={handleChange("name")}/></div>
                        <div><Label htmlFor="email">{t('labelEmail')}</Label><Input id="email" name="email" type="email" required value={form.email} onChange={handleChange("email")}/></div>
                        <div>
                            <Label>{t('labelInterestedCourses')}</Label>
                            <div className="checkbox-group">
                                {courseOptions.map((course) => (
                                    <div key={course} className="checkbox-item">
                                        <Input type="checkbox" id={course} name={course} checked={form.interestedCourses[course] || false} onChange={handleCheckboxChange}/>
                                        <Label htmlFor={course}>{course}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div><Label htmlFor="role">{t('labelRole')}</Label><Select id="role" name="role" value={form.role} onChange={(v) => setForm(p => ({...p, role: v}))} options={roleOptions} placeholder={t('placeholderSelect')} required /></div>
                        <div><Label htmlFor="source">{t('labelSource')}</Label><Select id="source" name="source" value={form.source} onChange={(v) => setForm(p => ({...p, source: v}))} options={sourceOptions} placeholder={t('placeholderSelect')} required /></div>
                        <div><Label htmlFor="message">{t('labelMessage')}</Label><Textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange("message")}/></div>
                        <Button type="submit" disabled={loading}>{loading ? t('buttonSubmitting') : t('buttonSubmit')}</Button>
                    </form>
                    <p className="signup-info">{t('infoFirstComeLine1')} <br /> {t('infoFirstComeLine2')}</p>
                    <div className="signup-book"><a href="https://app.coursely.se/activities/FuegoDance" aria-label="Boka en plats">{t('infoBookButton')}</a></div>
                </Card>
            </section>
            <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={t('modalTitle')}>
                <div className="modal-layout-container">
                    <div className="modal-column">
                        <p>{t('modalSuccessMessage')}</p>
                        <p style={{ marginTop: '1rem' }}>{t('modalClosingMessage')}</p>
                    </div>
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