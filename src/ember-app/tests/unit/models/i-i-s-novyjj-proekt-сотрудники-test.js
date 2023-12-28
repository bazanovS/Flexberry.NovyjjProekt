import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj-proekt-сотрудники', 'Unit | Model | i-i-s-novyjj-proekt-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-novyjj-proekt-горячие-напитки',
    'model:i-i-s-novyjj-proekt-еда',
    'model:i-i-s-novyjj-proekt-заказ',
    'model:i-i-s-novyjj-proekt-ингредиенты',
    'model:i-i-s-novyjj-proekt-напитки',
    'model:i-i-s-novyjj-proekt-продукты',
    'model:i-i-s-novyjj-proekt-составы',
    'model:i-i-s-novyjj-proekt-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
