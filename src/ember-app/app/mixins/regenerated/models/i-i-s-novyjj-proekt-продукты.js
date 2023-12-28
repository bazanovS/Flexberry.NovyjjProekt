import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-продукты.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-продукты.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродуктыE', 'i-i-s-novyjj-proekt-продукты', {
    наименование: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });

  modelClass.defineProjection('ПродуктыL', 'i-i-s-novyjj-proekt-продукты', {
    наименование: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });
};
