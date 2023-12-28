import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  цена: DS.attr('decimal'),
  ингредиенты: DS.belongsTo('i-i-s-novyjj-proekt-ингредиенты', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-напитки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-напитки.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ингредиенты: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-напитки.validations.ингредиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НапиткиE', 'i-i-s-novyjj-proekt-напитки', {
    наименование: attr('Наименование напитка', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });

  modelClass.defineProjection('НапиткиL', 'i-i-s-novyjj-proekt-напитки', {
    наименование: attr('Наименование напитка', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });
};
