export default {
  cjs: 'rollup',
  esm: 'rollup',
  umd: false,
  nodeResolveOpts: {
    mainFields: ['module', 'browser', 'main'],
  },
  // yarn build order
  pkgs: [
    'g-math',
    'g-lite',
    'g-compat',
    'g-camera-api',
    'g-css-typed-om-api',
    'g-css-layout-api',
    'g-web-animations-api',
    'g-dom-mutation-observer-api',
    'g',
    'g-layout-blocklike',
    'g-plugin-image-loader',
    'g-plugin-dragndrop',
    'g-plugin-dom-interaction',
    'g-plugin-mobile-interaction',
    'g-plugin-css-select',
    'g-plugin-canvas-path-generator',
    'g-plugin-canvas-renderer',
    'g-plugin-canvas-picker',
    'g-plugin-html-renderer',
    'g-plugin-canvaskit-renderer',
    'g-canvas',
    'g-canvaskit',
    'g-plugin-svg-renderer',
    'g-plugin-svg-picker',
    'g-svg',
    'g-plugin-device-renderer',
    'g-plugin-webgl-device',
    'g-plugin-webgpu-device',
    'g-webgl',
    'g-webgpu',
    'g-mobile-canvas-element',
    'g-mobile-canvas',
    'g-mobile-svg',
    'g-mobile-webgl',
    'g-gesture',
    'g-plugin-3d',
    'g-plugin-control',
    'g-plugin-gpgpu',
    'g-plugin-physx',
    'g-plugin-box2d',
    'g-plugin-matterjs',
    'g-plugin-yoga',
    'g-plugin-rough-canvas-renderer',
    'g-plugin-rough-svg-renderer',
    'g-plugin-a11y',
    'g-plugin-annotation',
    'g-components',
    'g-web-components',
    'react-g',
    'g-image-exporter',
  ],
};
