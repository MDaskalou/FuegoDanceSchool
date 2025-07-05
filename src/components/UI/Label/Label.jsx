import './label.css';

export default function Label({
                                  children,
                                  htmlFor,
                                  required = false,
                                  className = ""
                              }) {
    const requiredClass = required ? "label--required" : "";

    return (
        <label
            htmlFor={htmlFor}
            className={`label ${requiredClass} ${className}`}
        >
            {children}
        </label>
    );
}
