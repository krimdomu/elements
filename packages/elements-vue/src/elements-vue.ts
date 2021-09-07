/* eslint-disable */
import { App, Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@inovex.de/elements/dist/loader';
import { needsKebabCase } from './utils';

/**
 * We need to make sure that the web component fires an event
 * that will not conflict with the user's @ionChange binding,
 * otherwise the binding's callback will fire before any
 * v-model values have been updated.
 */
const toLowerCase = (eventName: string) => eventName.toLowerCase();
const toKebabCase = (eventName: string) => eventName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Vue 3.0.6 fixed a bug where events on custom elements
 * were always converted to lower case, so "ionRefresh"
 * became "ionRefresh". We need to account for the old
 * issue as well as the new behavior where "ionRefresh"
 * is converted to "ion-refresh".
 * See https://github.com/vuejs/vue-next/pull/2847
 */
const getHelperFunctions = (needsKebabCase: boolean = true) => {
  const conversionFn = (needsKebabCase) ? toKebabCase : toLowerCase;
  return {
    ael: (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(conversionFn(eventName), cb, opts),
    rel: (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(conversionFn(eventName), cb, opts),
    ce: (eventName: string, opts: any) => new CustomEvent(conversionFn(eventName), opts)
  };
};

export const ElementsVue: Plugin = {
  async install(app: App) {
    if (typeof (window as any) !== 'undefined') {
      const { ael, rel, ce } = getHelperFunctions(needsKebabCase(app.version));
      await applyPolyfills();
      await defineCustomElements(window, {
        exclude: ['ino-tabs'],
        ce,
        ael,
        rel
      } as any);
    }
  }
};
