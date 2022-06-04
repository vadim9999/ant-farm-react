import i18n from "i18next";
import en_GB from "locales/enGB";
import uk_UA from "locales/ukUA";

import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "uk_UA",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: { en_GB, uk_UA },
});
export default i18n;
