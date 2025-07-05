import './input.css';

export default function Input({ id, type = "text", value, onChange, placeholder, required, pattern }) {
    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            className="input"
        />
    );
}
