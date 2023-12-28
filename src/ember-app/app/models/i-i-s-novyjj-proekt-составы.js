import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставыMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-составы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставыMixin, Validations, {
});

defineProjections(Model);

export default Model;
