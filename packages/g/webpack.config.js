const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('../../webpack.config');

module.exports = {
  ...common,
  output: {
    library: 'G',
    libraryTarget: 'umd',
    filename: 'index.umd.js',
  },
  // plugins: [
  //   new BundleAnalyzerPlugin(),
  // ]
};