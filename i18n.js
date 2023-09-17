// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // default language
  resources: {
    en: {
      translation: require("./locales/en.json"),
    },
    fr: {
      translation: require("./locales/fr.json"),
    },
    // Add more languages and translations as needed
  },
});

export default i18n;
