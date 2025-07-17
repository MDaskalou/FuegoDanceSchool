import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'sv', // standard språk, kan ändras till 'en' eller annat
        fallbackLng: 'sv',
        debug: true,
        ns: ["navbarTranslation","heroTranslation", "aboutusTranslation",
            "eventTranslation", "reviewsTranslation", "contactTranslation",
            "instructorsTranslation", "helpInstructorsTranslation", "valuesTranslation","openHouseTranslation"], // lägg till fler t.ex. ['navbarTranslation', 'coursesTranslation']
        defaultNS: 'navbarTranslation',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });


export default i18n;
