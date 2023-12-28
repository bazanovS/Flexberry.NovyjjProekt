import { Serializer as СоставыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-novyjj-proekt-составы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
