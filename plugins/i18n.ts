import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Plugin } from '@nuxt/types';

Vue.use(VueI18n);

const i18n: Plugin = ({ app, store }: any): void => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      es: require('~/locales/es.json'),
    },
  });

  app.i18n.path = (link: string): string => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }

    return `/${app.i18n.locale}/${link}`;
  };
};

export default i18n;
