import i18n from "i18next";
import en_GB from "locales/enGB";
import uk_UA from "locales/ukUA";

import { initReactI18next } from "react-i18next";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "uk_UA",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: { en_GB, uk_UA },
  });
export default i18n;
