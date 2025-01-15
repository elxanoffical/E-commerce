import i18n from "i18next";
import { initReactI18next, } from "react-i18next";

const resources = {
  az: {
  },
  en: {
  },
};

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang") || "az",
  resources,
});

export default i18n;
