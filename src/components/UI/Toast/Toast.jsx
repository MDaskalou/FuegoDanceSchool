import React, { useEffect } from "react";
import './toast.css';

const Toast = ({ message, type = "success", onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast ${type}`}>
            <p>{message.title}</p>
            <span>{message.description}</span>
        </div>
    );
};

export default Toast;
