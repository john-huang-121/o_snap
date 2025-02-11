// // See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const { generateWebpackConfig, inliningCss } = require('shakapacker');
const isDevelopment = process.env.NODE_ENV !== 'production';

const webpackConfig = generateWebpackConfig();

if (isDevelopment && inliningCss) {
  const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

  webpackConfig.plugins.push(
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPort: webpackConfig.devServer.port,
      },
    })
  );
}

module.exports = webpackConfig;