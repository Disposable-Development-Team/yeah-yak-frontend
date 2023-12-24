const { override, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

module.exports = override(
  addWebpackAlias({
    '@styles': resolve(__dirname, 'src/styles'),
    '@images': resolve(__dirname, 'src/images'),
    '@atoms': resolve(__dirname, 'src/components/atoms'),
    '@modules': resolve(__dirname, 'src/components/modules'),
    '@templates': resolve(__dirname, 'src/components/templates'),
  }),
);
