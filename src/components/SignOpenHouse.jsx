import { useState } from "react";
import Card from "./UI/Card/Card";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";
import Label from "./UI/Label/Label";
import Textarea from "./UI/TextArea/TextArea";
import Select from "./UI/Select/Select";
import "../css/signopenhouse.css";
import { useToast } from "./UI/Toast/ToastContext";

const ENDPOINT =
    process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT ||
    "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

export default function OpenHouseSignup() {
    const { showToast } = useToast();

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

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                showToast("Tack!", "Vi har tagit emot din anmälan.");
                setForm(initialState);
            } else {
                const errorText = await res.text();
                showToast(
                    "Fel vid skickande",
                    errorText || "Något gick fel. Försök igen senare.",
                    "error"
                );
            }
        } catch (err) {
            showToast("Nätverksfel", "Kunde inte kontakta servern.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="oppet-hus" className="py-16 scroll-mt-24">
            <Card className="max-w-xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Föranmälan till Öppet Hus</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Namn *</Label>
                        <Input
                            id="name"
                            required
                            value={form.name}
                            onChange={handleChange("name")}
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">E‑post *</Label>
                        <Input
                            id="email"
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
                            placeholder="ÅÅMMDD‑XXXX"
                            pattern="^\\d{6}(\\d{2})?[-]?\\d{4}$"
                            required
                            value={form.personnummer}
                            onChange={handleChange("personnummer")}
                        />
                    </div>

                    <div>
                        <Label htmlFor="role">Förare eller Följare *</Label>
                        <Select
                            id="role"
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
                            rows={4}
                            value={form.message}
                            onChange={handleChange("message")}
                        />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? "Skickar…" : "Skicka"}
                    </Button>
                </form>

                {/* Flyttad hit för bättre flow */}
                <p className="signup-info">
                    En föranmälan garanterar inte en plats. <br />
                    Det är först till kvarn som gäller.
                </p>
                <div className="signup-book">
                    <a href="https://app.coursely.se/activities/FuegoDance" aria-label="Boka en plats">
                        Boka en plats
                    </a>
                </div>
            </Card>
        </section>
    );
}
