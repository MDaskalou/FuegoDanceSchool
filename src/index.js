import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 👈 viktigt!
import { ToastProvider } from './components/UI/Toast/ToastContext'; // justera om sökvägen skiljer sig
import './i18n';
import './index.css'; // 👈 LÄGG TILL DENNA RAD


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter> {/* 👈 detta behövs för routing */}
            <ToastProvider> {/* 👈 detta fixar toast-felet också */}
                <App />
            </ToastProvider>
        </BrowserRouter>
    </React.StrictMode>
);
