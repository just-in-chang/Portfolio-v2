module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // sass-loader 14+ automatically uses sass-embedded if available
      // and uses the modern API by default, so we don't need to configure it
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    // Fix webpack-dev-server deprecation warnings
    const originalBefore = devServerConfig.onBeforeSetupMiddleware;
    const originalAfter = devServerConfig.onAfterSetupMiddleware;

    delete devServerConfig.onBeforeSetupMiddleware;
    delete devServerConfig.onAfterSetupMiddleware;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (originalBefore) {
        originalBefore(devServer);
      }

      if (originalAfter) {
        originalAfter(devServer);
      }

      return middlewares;
    };

    return devServerConfig;
  },
};

