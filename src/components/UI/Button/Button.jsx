import './Button.css'; // Se till att detta finns!

export default function Button({ onClick, children, className = "", type = "button", disabled }) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`btn ${className}`}
        >
            {children}
        </button>
    );
}
