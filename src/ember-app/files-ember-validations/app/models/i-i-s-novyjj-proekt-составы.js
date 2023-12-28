import {
  defineNamespace,
  defineProjections,
  Model as СоставыMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-составы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
