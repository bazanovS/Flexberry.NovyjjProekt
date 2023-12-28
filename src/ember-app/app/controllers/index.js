import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиентам.caption'),
          title: i18n.t('forms.application.sitemap.клиентам.title'),
          children: [{
            link: 'i-i-s-novyjj-proekt-заказ-l',
            caption: i18n.t('forms.application.sitemap.клиентам.i-i-s-novyjj-proekt-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.клиентам.i-i-s-novyjj-proekt-заказ-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудникам.caption'),
          title: i18n.t('forms.application.sitemap.сотрудникам.title'),
          children: [{
            link: 'i-i-s-novyjj-proekt-продукты-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-продукты-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-продукты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-составы-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-составы-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-составы-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-ингредиенты-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-ингредиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-ингредиенты-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-сотрудники-l.title'),
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-напитки-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-напитки-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-novyjj-proekt-напитки-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})