import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  остаток: DS.attr('decimal'),
  составы: DS.belongsTo('i-i-s-novyjj-proekt-составы', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-novyjj-proekt-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-ингредиенты.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  остаток: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-ингредиенты.validations.остаток.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составы: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-ингредиенты.validations.составы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-ингредиенты.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнгредиентыE', 'i-i-s-novyjj-proekt-ингредиенты', {
    сотрудники: belongsTo('i-i-s-novyjj-proekt-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      должность: attr('Должность', { index: 2 })
    }, { index: 0, displayMemberPath: 'фИО' }),
    составы: belongsTo('i-i-s-novyjj-proekt-составы', 'Составы', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    количество: attr('Добавленное количество', { index: 5 }),
    остаток: attr('Остаток', { index: 6 })
  });

  modelClass.defineProjection('ИнгредиентыL', 'i-i-s-novyjj-proekt-ингредиенты', {
    сотрудники: belongsTo('i-i-s-novyjj-proekt-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true }),
    составы: belongsTo('i-i-s-novyjj-proekt-составы', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true }),
    количество: attr('Добавленное количество', { index: 2 }),
    остаток: attr('Остаток', { index: 3 })
  });
};
