import { createContext, useContext, useState } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toastData, setToastData] = useState(null);

    const showToast = (title, description, type = "success") => {
        setToastData({ title, description, type });
    };

    const hideToast = () => {
        setToastData(null);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toastData && <Toast message={toastData} type={toastData.type} onClose={hideToast} />}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
