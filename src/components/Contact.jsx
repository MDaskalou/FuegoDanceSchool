// src/components/Contact.jsx
import "../css/contact.css";

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Kontakta oss</h2>
                <p className="contact-subtitle">Har du frågor? Tveka inte att höra av dig!</p>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="name" placeholder="Namn" required />
                    <input type="email" name="email" placeholder="E-post" required />
                    <textarea name="message" placeholder="Ditt meddelande" required></textarea>
                    <button type="submit">Skicka</button>
                </form>
                
                <div className="contact-icons">
                    
                    <a href="https://instagram.com/fuegodance" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://facebook.com/fuegodance" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>  
                    
                </div>

                <div className="contact-info">
                    <p><strong>E-post:</strong> info@fuegodanceschool.com</p>
                    <p><strong>Adress:</strong> Doktor Westrings Gata 14D, Göteborg</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
