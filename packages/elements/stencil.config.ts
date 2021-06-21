import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { angularOutputTargetFix } from './angular-target-fix';
import { vueOutputTarget } from "@stencil/vue-output-target";

// @ts-ignore
export const config: Config = {
  buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
  globalScript: './src/util/import-fonts.ts',
  enableCache: true,
  namespace: 'inovex-elements',
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'assets/ino-icon', dest: 'ino-icon' }],
    },
    { type: 'docs-readme' },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/inovex/elements/tree/master/packages/elements/',
    },
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
    {
      type: 'dist-hydrate-script'
    },
    angularOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      directivesProxyFile:
        '../elements-angular/elements/src/directives/proxies.ts',
      directivesUtilsFile:
        '../elements-angular/elements/src/directives/proxies-utils.ts',
      directivesArrayFile:
        '../elements-angular/elements/src/directives/proxies-list.ts',
    }),
    angularOutputTargetFix({
      directivesUtilsFile:
        '../elements-angular/elements/src/directives/angular-component-lib/utils.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      proxiesFile: '../elements-vue/src/proxies.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
      componentModels: [
        {
          elements: ['ino-checkbox', 'ino-switch', 'ino-radio'],
          targetAttr: 'checked',
          event: ['v-checkedChange', 'v-checked-change'],
          externalEvent: 'checkedChange'
        },
        {
          elements: ['ino-datepicker', 'ino-input', 'ino-range', 'ino-select', 'ino-textarea'],
          targetAttr: 'value',
          event: ['v-valueChange', 'v-value-change'],
          externalEvent: 'valueChange'
        }
      ],
    })
  ],
  plugins: [
    sass({
      injectGlobalPaths: [],
      includePaths: ['./src/components', '../../node_modules'],
    }),
  ],
  preamble: 'Crafted with ❤ by inovex GmbH',
};
