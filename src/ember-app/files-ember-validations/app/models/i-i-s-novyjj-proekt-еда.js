import {
  defineNamespace,
  defineProjections,
  Model as ЕдаMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-еда';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЕдаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
