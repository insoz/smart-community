const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = (webpackConfig, env) => {
  webpackConfig.resolve.alias = {
    ...webpackConfig.resolve.alias,
    components: `${__dirname}/src/components`,
    utils: `${__dirname}/src/utils`,
    config: `${__dirname}/src/utils/config`,
    enums: `${__dirname}/src/utils/enums`,
    services: `${__dirname}/src/services`,
    models: `${__dirname}/src/models`,
    routes: `${__dirname}/src/routes`,
    themes: `${__dirname}/src/themes`
  };

  webpackConfig.plugins = webpackConfig.plugins.concat(
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true
    })
  );
  return webpackConfig;
};
