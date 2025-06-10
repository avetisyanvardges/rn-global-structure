import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import chainedBackend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import fallbackTranslation from '../../locales/fallbackLng.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTranslation } from 'services/i18n/translationService';
import { getLocales } from 'react-native-localize';

const bundledResources = {
  en: {
    translation: fallbackTranslation,
  },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('lang').then(lang => {
      if (lang) {
        callback(lang);
      } else {
        const locale = getLocales()[0]?.languageCode || 'am';
        callback(locale);
      }
    });
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const backendOptions = {
  loadPath: '{{lng}}|{{ns}}',
  request: async (options, url, payload, callback) => {
    try {
      const [lng] = url.split('|');
      getTranslation(lng).then(response => {
        callback(null, {
          data: response,
          status: 200,
        });
      });
    } catch (e) {
      console.log(e, 'i18n:catch');
      callback(null, {
        data: fallbackTranslation,
        status: 500,
      });
    }
  },
};
i18n
  .use(chainedBackend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    compatibilityJSON: 'v3',
    fallbackLng: 'am',
    returnEmptyString: false,
    backend: {
      backends: [HttpBackend, resourcesToBackend(bundledResources)],
      backendOptions: [backendOptions],
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: true,
    },
  })
  .then(() => {
    console.log('i18n initialized');
  });

export default i18n;
