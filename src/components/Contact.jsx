// src/components/Contact.jsx
import "../css/contact.css";
import Button from './UI/Button/Button';
import Section from './UI/Section/Section';

function Contact() {
    return (
        <Section id="contact" className="contact-section">
            <div className="contact-wrapper">
                <div className="contact-map">
                    <iframe
                        title="Karta till Fuego Dance School"
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
                    <h2 className="contact-title">Kontakta oss</h2>
                    <p className="contact-subtitle">Har du frågor? Tveka inte att höra av dig!</p>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="name" placeholder="Namn" required />
                        <input type="email" name="email" placeholder="E-post" required />
                        <textarea name="message" placeholder="Ditt meddelande" required></textarea>
                        <Button type="submit">Skicka</Button>
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
                        <p><strong>E-post:</strong> info@fuegodanceschool.com</p>
                        <p><strong>Adress:</strong> Doktor Westrings Gata 14D, Göteborg</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Contact;
