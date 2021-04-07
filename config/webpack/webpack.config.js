const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = () =>
  merge(common, require(`./webpack.${process.env.NODE_ENV}.js`));
