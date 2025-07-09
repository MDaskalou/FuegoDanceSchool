import './textarea.css';

export default function Textarea({ id, value, onChange, rows = 4 }) {
    return (
        <textarea
            id={id}
            rows={rows}
            value={value}
            onChange={onChange}
            className="textarea"
        />
    );
}
