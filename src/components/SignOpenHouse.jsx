import React, { useState } from "react";
import Card from "./UI/Card/Card";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";
import Label from "./UI/Label/Label";
import Textarea from "./UI/TextArea/TextArea";
import Select from "./UI/Select/Select";
import "../css/signopenhouse.css";
import { useToast } from "./UI/Toast/ToastContext";
import SectionTitle from "./UI/SectionTitle";

export default function OpenHouseSignup() {
    const initialState = {
        name: "",
        email: "",
        personnummer: "",
        role: "",
        source: "",
        message: "",
    };
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "oppet-hus",
                    ...form
                })
            });

            if (response.ok) {
                showToast("Anmälan skickad! 🎉", "success");
                setForm(initialState);
            } else {
                throw new Error("Formulär kunde inte skickas");
            }
        } catch (error) {
            console.error("Fel vid skick:", error);
            showToast("Fel vid skick: " + error.message, "error");
        }

        setLoading(false);
    };

    return (
        <section id="oppet-hus" className="py-16 scroll-mt-24">
            <Card className="max-w-xl mx-auto p-6">
                <SectionTitle color="white">Föranmäl dig till öppet hus</SectionTitle>

                {/* Dolt HTML-formulär för Netlify att upptäcka */}
                <form name="oppet-hus" netlify netlify-honeypot="bot-field" hidden>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="text" name="personnummer" />
                    <select name="role">
                        <option value="förare">förare</option>
                        <option value="följare">följare</option>
                    </select>
                    <select name="source">
                        <option value="facebook">facebook</option>
                        <option value="instagram">instagram</option>
                        <option value="google">google</option>
                        <option value="vän">vän</option>
                        <option value="annat">annat</option>
                    </select>
                    <textarea name="message"></textarea>
                </form>

                {/* Riktigt formulär som användaren ser */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot för spam-skydd */}
                    <input type="hidden" name="form-name" value="oppet-hus" />
                    <div style={{ display: 'none' }}>
                        <input name="bot-field" />
                    </div>

                    <div>
                        <Label htmlFor="name">Namn *</Label>
                        <Input
                            id="name"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange("name")}
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">E‑post *</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange("email")}
                        />
                    </div>

                    <div>
                        <Label htmlFor="personnummer">Personnummer *</Label>
                        <Input
                            id="personnummer"
                            name="personnummer"
                            placeholder="ÅÅMMDD‑XXXX"
                            pattern="^\d{6}(\d{2})?[-]?\d{4}$"
                            required
                            value={form.personnummer}
                            onChange={handleChange("personnummer")}
                        />
                    </div>

                    <div>
                        <Label htmlFor="role">Förare eller Följare *</Label>
                        <Select
                            id="role"
                            name="role"
                            value={form.role}
                            onChange={(v) => setForm((p) => ({ ...p, role: v }))}
                            options={["förare", "följare"]}
                            placeholder="Välj ett alternativ"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="source">Hur hittade du oss? *</Label>
                        <Select
                            id="source"
                            name="source"
                            value={form.source}
                            onChange={(v) => setForm((p) => ({ ...p, source: v }))}
                            options={["facebook", "instagram", "google", "vän", "annat"]}
                            placeholder="Välj ett alternativ"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="message">Övrigt</Label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange("message")}
                        />
                    </div>

                    <Button type="submit" disabled={loading}>
                        {loading ? "Skickar…" : "Skicka"}
                    </Button>
                </form>

                <p className="signup-info">
                    En föranmälan garanterar inte en plats. <br />
                    Det är först till kvarn som gäller.
                </p>

                <div className="signup-book">
                    <a
                        href="https://app.coursely.se/activities/FuegoDance"
                        aria-label="Boka en plats"
                    >
                        Boka en plats
                    </a>
                </div>
            </Card>
        </section>
    );
}