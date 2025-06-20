import type { StrapiApp } from '@strapi/strapi/admin';

import {
  type PluginConfig,
  type Preset,
  setPluginConfig,
  defaultHtmlPreset,
} from '@_sh/strapi-plugin-ckeditor';

const defaultHtml: Preset = {
  ...defaultHtmlPreset,
  description: 'Content HTML editor',
  styles: '',
  editorConfig: {
    ...defaultHtmlPreset.editorConfig,
    placeholder: 'Content',
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'codeBlock',
      'blockQuote',
      '|',
      'strapiMediaLib',
      'insertTable',
      '|',
      'htmlEmbed',
      '|',
      'undo',
      'redo',
    ],
  },
};

const myConfig: PluginConfig = {
  presets: [defaultHtml],
};

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  register() {
    setPluginConfig(myConfig);
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
