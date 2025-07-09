// src/components/UI/LinkButton.jsx
import './Button.css';

export default function LinkButton({ href, children, className = "", target = "_self", rel = "noopener noreferrer" }) {
    return (
        <a href={href} className={`btn ${className}`} target={target} rel={rel}>
            {children}
        </a>
    );
}
