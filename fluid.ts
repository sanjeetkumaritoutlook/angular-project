export const fluidEnvironments = {
  dev: {
    label: 'Development',
    esm: 'https://fluid-dev.lmig.com/fluid/build/fluid.esm.js',
    legacy: 'https://fluid-dev.lmig.com/fluid/build/fluid.js',
  },
  test: {
    label: 'Test',
    esm: 'https://fluid-test.lmig.com/fluid/build/fluid.esm.js',
    legacy: 'https://fluid-test.lmig.com/fluid/build/fluid.js',
  },
  prod: {
    label: 'Production',
    esm: 'https://fluid.lmig.com/fluid/build/fluid.esm.js',
    legacy: 'https://fluid.lmig.com/fluid/build/fluid.js',
  },
  local: {
    label: 'Local',
    esm: 'http://localhost:3333/fluid/build/fluid.esm.js',
    legacy: 'http://localhost:3333/fluid/build/fluid.js',
  },
  external: {
    label: 'External',
    esm: 'https://fluid.libertymutual.com/fluid/build/fluid.esm.js',
    legacy: 'https://fluid.libertymutual.com/fluid/build/fluid.js',
  },
};
