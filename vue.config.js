const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  //svg-loader配置
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, "src/assets/icon/svg");
    config.module.rule("svg").exclude.add(dir).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(dir)
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "[name]",
      })
      .end();
  },
});
