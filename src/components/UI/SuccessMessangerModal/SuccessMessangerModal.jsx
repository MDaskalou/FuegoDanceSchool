import React from 'react';
import './successmessangerModal.css';
import { useTranslation } from 'react-i18next';

const SuccessMessangerModal = ({ onClose }) => {
    const { t } = useTranslation("contactTranslation");

    return (
        <div className="success-modal" onClick={onClose}>
            <div className="modal-content">
                <h2>{t("formSuccess")}</h2>
                <p>{t("formSuccessText")}</p>
            </div>
        </div>
    );
};

export default SuccessMessangerModal;
