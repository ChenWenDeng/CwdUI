// import Demo from './demo';
import Card from './card';
import Dialog from './dialog';
import Captcha from './captcha';
import Table from './table';

import { version } from '../../package.json';

const components = {
  // Demo,
  Card,
  Dialog,
  Captcha,
  Table
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version,
  install,
  ...components
};

export {
  Card,
  Dialog,
  Captcha,
  Table
}

export default API;