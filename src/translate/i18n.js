import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { deTranslations } from "./translations/de";
import { enTranslations } from "./translations/en";
import { esTranslations } from "./translations/es";
import { frTranslations } from "./translations/fr";
import { itTranslations } from "./translations/it";
import { ruTranslations } from "./translations/ru";
import { ukTranslations } from "./translations/uk";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  de: deTranslations,
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  it: itTranslations,
  ru: ruTranslations,
  uk: ukTranslations
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: ["en", "ru", "de", "es", "fr", "it", "uk"],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
