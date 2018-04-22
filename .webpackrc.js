export default {
  publicPath: "/static/",
  extraBabelPlugins: ["lodash"],
  theme: "./theme.js",
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  }
};
