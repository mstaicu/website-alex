import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationBackend from 'i18next-http-backend';
import browserLanguageDetector from 'i18next-browser-languagedetector';

const xhrOptions = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
};

/**
 * The content language served by i18n, in the source code, is picked based on:
 *
 * 1. First check the 'navigator' object on the global scope (open the developer console and type navigator.language to get the top level language of the browser)
 * 2. If not, check the 'en' attribute on the <html> tag
 */
const languageDetectionOptions = {
  order: ['navigator', 'htmlTag'],
};

i18n
  .use(translationBackend)
  .use(browserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    backend: xhrOptions,
    detection: languageDetectionOptions,
  });

export default i18n;
