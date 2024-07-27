import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import LanguageDetector from 'i18next-http-middleware'; // Ensure the correct import for language detection middleware

i18next
  .use(Backend)
  .use(LanguageDetector.LanguageDetector) // Ensure the correct usage of language detector
  .init({
    fallbackLng: 'en',
    preload: ['en', 'es', 'fr'],
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['querystring', 'cookie', 'header'],
      caches: ['cookie']
    }
  });

export default i18next;
