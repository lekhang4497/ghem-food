import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  vn: {
    translation: {
      welcomeEnjoy: "Về nhà ăn cơm cùng",
      welcomeText:
        "Ghém phục vụ những món ăn thuần Việt, tinh tế nhưng vẫn gần gũi như mâm cơm gia đình mẹ nấu trong không gian một ngôi nhà Việt Nam giản dị mà ấm cúng và thân tình.",
      menuMain: "Món mặn",
      menuVegetable: "Món rau",
      menuSoup: "Món canh",
      menuHotPot: "Món Lẩu",
      menuParty: "Món tiệc",
    },
  },
  en: {
    translation: {
      welcomeEnjoy: "Enjoy Vietnamese home meals with",
      welcomeText:
        "Ghem serves authentic Vietnamese meals as you can enjoy in Vietnamese families in a simple but still friendly, cozy Vietnam house.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
