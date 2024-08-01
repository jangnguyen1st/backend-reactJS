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
    link: Attribute.String;
  };
}

export interface HomeTabHome extends Schema.Component {
  collectionName: 'components_home_tab_homes';
  info: {
    displayName: 'tab_home';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    images: Attribute.Component<'shared.image', true>;
  };
}

export interface HomeImageDetailContent extends Schema.Component {
  collectionName: 'components_home_image_detail_contents';
  info: {
    displayName: 'image_detail_content';
    icon: 'stack';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url_detail: Attribute.String;
  };
}

export interface HomeContentDetailHome extends Schema.Component {
  collectionName: 'components_home_content_detail_homes';
  info: {
    displayName: 'content_detail_home';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image_detail: Attribute.Component<'home.image-detail-content', true>;
  };
}

export interface HeaderSubNav extends Schema.Component {
  collectionName: 'components_header_sub_navs';
  info: {
    displayName: 'Sub_nav';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    submenu: Attribute.Component<'header.normal-nav', true>;
  };
}

export interface HeaderNormalNav extends Schema.Component {
  collectionName: 'components_header_normal_navs';
  info: {
    displayName: 'normal_nav';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.image': SharedImage;
      'home.tab-home': HomeTabHome;
      'home.image-detail-content': HomeImageDetailContent;
      'home.content-detail-home': HomeContentDetailHome;
      'header.sub-nav': HeaderSubNav;
      'header.normal-nav': HeaderNormalNav;
    }
  }
}
