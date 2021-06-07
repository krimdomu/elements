import * as components from 'src/components';

const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
function convertToKebabCase(componentName) {
  return componentName.replace(KEBAB_REGEX, (match) => `-${match.toLowerCase()}`);
}

export default {
  install: (app, options) => {
    for (let componentName in components) {
      if (componentName.toLowerCase().startsWith('ino')){
        app.component(convertToKebabCase(componentName), components[componentName]);
      }
    }
  }
}
