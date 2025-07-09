export default function Button({ onClick, children, className = "", type = "button" }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-700 transition ${className}`}
        >
            {children}
        </button>
    );
}
