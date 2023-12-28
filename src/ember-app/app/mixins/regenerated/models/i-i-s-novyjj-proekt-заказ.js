import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаказа: DS.attr('string'),
  типОплаты: DS.attr('i-i-s-novyjj-proekt-оплата'),
  горячиеНапитки: DS.hasMany('i-i-s-novyjj-proekt-горячие-напитки', { inverse: 'заказ', async: false }),
  еда: DS.hasMany('i-i-s-novyjj-proekt-еда', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  датаЗаказа: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-заказ.validations.датаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-заказ.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  горячиеНапитки: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-заказ.validations.горячиеНапитки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  еда: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-заказ.validations.еда.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-novyjj-proekt-заказ', {
    датаЗаказа: attr('Дата заказа', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    горячиеНапитки: hasMany('i-i-s-novyjj-proekt-горячие-напитки', 'Горячие напитки', {
      напитки: belongsTo('i-i-s-novyjj-proekt-напитки', 'Напитки', {
        наименование: attr('Наименование напитка', { index: 1, hidden: true }),
        цена: attr('Цена', { index: 2 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      сахар: attr('Сахар', { index: 3 })
    }),
    еда: hasMany('i-i-s-novyjj-proekt-еда', 'Еда', {
      продукты: belongsTo('i-i-s-novyjj-proekt-продукты', 'Продукты', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        цена: attr('Цена', { index: 2 })
      }, { index: 0, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-novyjj-proekt-заказ', {
    датаЗаказа: attr('Дата заказа', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 })
  });
};
