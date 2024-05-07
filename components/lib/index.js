// import Demo from './demo';
import Card from './card';
import Dialog from './dialog';
import Captcha from './captcha';

import { version } from '../../package.json';

const components = {
  // Demo,
  Card,
  Dialog,
  Captcha
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

export default API;