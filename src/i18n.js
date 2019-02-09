import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import resources from "./translations/resources.json";
import moment from 'moment';

// locale should be imported in order for moment to know about it.
import 'moment/locale/fr';

i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "en", // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

// Update moment locale
i18n.on('languageChanged', function (lng) {
    moment.locale(lng);
});
moment.locale(i18n.language)
moment.defaultFormat = "D MMM"

export default i18n;