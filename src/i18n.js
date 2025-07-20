// src/i18n.js (Komplett och korrekt version)
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'sv',
        debug: true,

        ns: [
            'navbarTranslation',
            'heroReelTranslation',
            'openhouse',
            'coursesTranslation',
            'pricesTranslation',
            'eventTranslation',
            'instructorsTranslation',
            'helpInstructorsTranslation',
            'values',
            'faq',
            'contactTranslation',
            'aboutusTranslation' // Se till att denna finns med
        ],

        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;