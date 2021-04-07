const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    /**
     * 'publicPath' allows you to specify the base path for all the assets
     * within your application
     */
    publicPath: '/',
    /**
     * The 'historyApiFallback' option redirects all 404 requests
     * back to /index.html, where the client side router will
     * be able to correctly handle the route
     */
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
