import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../i18n/locales/en.json";
import ru from "../i18n/locales/ru.json";
import uz from "../i18n/locales/uzb.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  },
  lng: "uz", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;