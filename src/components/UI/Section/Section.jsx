import './Section.css';

export default function Section({ id, className = "", children }) {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="section-inner">{children}</div>
        </section>
    );
}
