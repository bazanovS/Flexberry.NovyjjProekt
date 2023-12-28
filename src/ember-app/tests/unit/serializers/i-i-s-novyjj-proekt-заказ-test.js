import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj-proekt-заказ', 'Unit | Serializer | i-i-s-novyjj-proekt-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-novyjj-proekt-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-novyjj-proekt-колво-сахара',
    'transform:i-i-s-novyjj-proekt-оплата',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
