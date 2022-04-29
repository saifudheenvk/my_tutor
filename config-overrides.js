const {
  override,
  fixBabelImports,
  addWebpackPlugin
} = require('customize-cra');
const addLessLoader = require("customize-cra-less-loader");
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const path = require('path');

const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/styles'),
  varFile: path.join(__dirname, './src/styles/variables.less'),
  mainLessFile: path.join(__dirname, './src/styles/index.less'),
  themeVariables: [
    '@primary-color',
    '@body-background',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background',
    '@border-color-base',
    '@component-background',
    '@primary-1',
    '@primary-2',
    '@primary-3',
    '@primary-4',
    '@primary-5',
    '@primary-6',
    '@primary-7',
    '@primary-8',
    '@primary-9',
    '@modal-content-bg',
    '@input-placeholder-color',
    '@popover-background',
    '@btn-default-bg',
    '@btn-default-border',
    '@btn-primary-color',
    '@tooltip-color',
    '@input-icon-hover-color',
  ],
  indexFileName: 'index.html',
  generateOnce: false, // generate color.less on each compilation
};
const themePlugin = new AntDesignThemePlugin(options);


module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#038fde',
          }
        }
      }
    }),
    addWebpackPlugin(themePlugin),
  ),
};
