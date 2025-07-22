// src/components/UI/Button/NavButton.jsx
import './NavButton.css';

export default function NavButton({ children, onClick }) {
    return (
        <button className="nav-btn" onClick={onClick}>
            {children}
        </button>
    );
}
