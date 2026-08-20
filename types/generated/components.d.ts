import type { Schema, Struct } from '@strapi/strapi';

export interface UtilsDimensions extends Struct.ComponentSchema {
  collectionName: 'components_utils_dimensions';
  info: {
    displayName: 'dimensions';
    icon: 'crop';
  };
  attributes: {
    depth: Schema.Attribute.Decimal;
    height: Schema.Attribute.Decimal;
    width: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'utils.dimensions': UtilsDimensions;
    }
  }
}
