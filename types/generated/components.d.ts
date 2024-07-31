import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'earth';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
    icon: 'earth';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.image': SharedImage;
    }
  }
}
