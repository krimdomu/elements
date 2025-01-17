import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

const angularDiretivesPath =  '../elements-angular/elements/src/directives';

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
      type: 'docs-json',
      file: '../storybook/elements-stencil-docs.json',
    },
    angularOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      directivesProxyFile: `${angularDiretivesPath}/proxies.ts`,
      directivesUtilsFile: angularDiretivesPath,
      directivesArrayFile: `${angularDiretivesPath}/proxies-list.ts`,
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: [],
      includePaths: ['./src/components', '../../node_modules'],
    }),
  ],
  preamble: 'Crafted with ❤ by inovex GmbH',
};
