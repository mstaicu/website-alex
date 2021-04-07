const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = ({ NODE_ENV }) =>
  merge(common, require(`./webpack.${NODE_ENV}.js`));
