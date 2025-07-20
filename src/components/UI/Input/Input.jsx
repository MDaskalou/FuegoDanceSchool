// src/components/UI/Input/Input.jsx (Uppdaterad och flexibel version)
import './input.css';

// 1. Vi tar emot en fast 'className' och samlar alla andra props i ett "...rest"-objekt
export default function Input({ className, ...rest }) {
    return (
        <input
            // 2. Vi kombinerar vår standardklass "input" med eventuella extra klasser
            className={`input ${className || ''}`}

            // 3. Vi "sprider ut" alla andra props direkt på input-elementet.
            // Detta skickar automatiskt vidare id, type, value, onChange, name, checked,
            // placeholder, required, pattern, etc.
            {...rest}
        />
    );
}