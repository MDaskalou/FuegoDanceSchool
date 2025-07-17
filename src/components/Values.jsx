// src/components/Values.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importera hooken
import '../css/values.css';
import SectionTitle from "./UI/SectionTitle";
import valueData from '../Data/valuesData'; // Importera den nya, rena datan

export default function Values() {
    // Använd hooken med ditt nya 'values' namespace
    const { t } = useTranslation('valuesTranslation');

    return (
        <section className="values-page">
            <div className="values-header">
                {/* Hämta rubriker från JSON */}
                <SectionTitle color="white">{t('headerTitle')}</SectionTitle>
                <p>{t('headerSubtitle')}</p>
            </div>

            <div className="values-list">
                {valueData.map((value) => (
                    // Använd value.id som key, det är mer robust än index
                    <div className="value-card" key={value.id}>
                        {/* Bygg nyckeln dynamiskt med value.id och hämta text */}
                        <h3>{value.emoji} {t(`value_${value.id}_title`)}</h3>
                        <p>{t(`value_${value.id}_description`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}