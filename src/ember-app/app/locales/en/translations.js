import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNovyjj_proektЗаказLForm from './forms/i-i-s-novyjj-proekt-заказ-l';
import IISNovyjj_proektИнгредиентыLForm from './forms/i-i-s-novyjj-proekt-ингредиенты-l';
import IISNovyjj_proektНапиткиLForm from './forms/i-i-s-novyjj-proekt-напитки-l';
import IISNovyjj_proektПродуктыLForm from './forms/i-i-s-novyjj-proekt-продукты-l';
import IISNovyjj_proektСоставыLForm from './forms/i-i-s-novyjj-proekt-составы-l';
import IISNovyjj_proektСотрудникиLForm from './forms/i-i-s-novyjj-proekt-сотрудники-l';
import IISNovyjj_proektЗаказEForm from './forms/i-i-s-novyjj-proekt-заказ-e';
import IISNovyjj_proektИнгредиентыEForm from './forms/i-i-s-novyjj-proekt-ингредиенты-e';
import IISNovyjj_proektНапиткиEForm from './forms/i-i-s-novyjj-proekt-напитки-e';
import IISNovyjj_proektПродуктыEForm from './forms/i-i-s-novyjj-proekt-продукты-e';
import IISNovyjj_proektСоставыEForm from './forms/i-i-s-novyjj-proekt-составы-e';
import IISNovyjj_proektСотрудникиEForm from './forms/i-i-s-novyjj-proekt-сотрудники-e';
import IISNovyjj_proektГорячиеНапиткиModel from './models/i-i-s-novyjj-proekt-горячие-напитки';
import IISNovyjj_proektЕдаModel from './models/i-i-s-novyjj-proekt-еда';
import IISNovyjj_proektЗаказModel from './models/i-i-s-novyjj-proekt-заказ';
import IISNovyjj_proektИнгредиентыModel from './models/i-i-s-novyjj-proekt-ингредиенты';
import IISNovyjj_proektНапиткиModel from './models/i-i-s-novyjj-proekt-напитки';
import IISNovyjj_proektПродуктыModel from './models/i-i-s-novyjj-proekt-продукты';
import IISNovyjj_proektСоставыModel from './models/i-i-s-novyjj-proekt-составы';
import IISNovyjj_proektСотрудникиModel from './models/i-i-s-novyjj-proekt-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-novyjj-proekt-горячие-напитки': IISNovyjj_proektГорячиеНапиткиModel,
    'i-i-s-novyjj-proekt-еда': IISNovyjj_proektЕдаModel,
    'i-i-s-novyjj-proekt-заказ': IISNovyjj_proektЗаказModel,
    'i-i-s-novyjj-proekt-ингредиенты': IISNovyjj_proektИнгредиентыModel,
    'i-i-s-novyjj-proekt-напитки': IISNovyjj_proektНапиткиModel,
    'i-i-s-novyjj-proekt-продукты': IISNovyjj_proektПродуктыModel,
    'i-i-s-novyjj-proekt-составы': IISNovyjj_proektСоставыModel,
    'i-i-s-novyjj-proekt-сотрудники': IISNovyjj_proektСотрудникиModel
  },

  'application-name': 'Novyjj_proekt',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Novyjj_proekt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_proekt',
          title: 'Novyjj_proekt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        клиентам: {
          caption: 'Клиентам',
          title: 'Клиентам',
          'i-i-s-novyjj-proekt-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        },
        сотрудникам: {
          caption: 'Сотрудникам',
          title: 'Сотрудникам',
          'i-i-s-novyjj-proekt-продукты-l': {
            caption: 'Продукты',
            title: ''
          },
          'i-i-s-novyjj-proekt-составы-l': {
            caption: 'Составы',
            title: ''
          },
          'i-i-s-novyjj-proekt-ингредиенты-l': {
            caption: 'Ингредиенты',
            title: ''
          },
          'i-i-s-novyjj-proekt-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-novyjj-proekt-напитки-l': {
            caption: 'Напитки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-novyjj-proekt-заказ-l': IISNovyjj_proektЗаказLForm,
    'i-i-s-novyjj-proekt-ингредиенты-l': IISNovyjj_proektИнгредиентыLForm,
    'i-i-s-novyjj-proekt-напитки-l': IISNovyjj_proektНапиткиLForm,
    'i-i-s-novyjj-proekt-продукты-l': IISNovyjj_proektПродуктыLForm,
    'i-i-s-novyjj-proekt-составы-l': IISNovyjj_proektСоставыLForm,
    'i-i-s-novyjj-proekt-сотрудники-l': IISNovyjj_proektСотрудникиLForm,
    'i-i-s-novyjj-proekt-заказ-e': IISNovyjj_proektЗаказEForm,
    'i-i-s-novyjj-proekt-ингредиенты-e': IISNovyjj_proektИнгредиентыEForm,
    'i-i-s-novyjj-proekt-напитки-e': IISNovyjj_proektНапиткиEForm,
    'i-i-s-novyjj-proekt-продукты-e': IISNovyjj_proektПродуктыEForm,
    'i-i-s-novyjj-proekt-составы-e': IISNovyjj_proektСоставыEForm,
    'i-i-s-novyjj-proekt-сотрудники-e': IISNovyjj_proektСотрудникиEForm
  },

});

export default translations;
