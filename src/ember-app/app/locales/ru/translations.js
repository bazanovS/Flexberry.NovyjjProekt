import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Novyjj_proekt',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_proekt',
          title: 'Novyjj_proekt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
