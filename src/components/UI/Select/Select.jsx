import './select.css';

export default function Select({ id, value, onChange, options, placeholder = "Välj...", required }) {
    return (
        <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="select"
        >
            <option value="" disabled>{placeholder}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </option>
            ))}
        </select>
    );
}
