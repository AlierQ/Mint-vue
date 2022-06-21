// 配置webpack
const path = require("path");
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, "src/assets/icons");

    config.module
      .rule("svg-sprite")
      .test(/\.svg$/) // 匹配正则
      .include.add(dir)
      .end() // 只让dir下的svg走这个规则
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ extract: false }) // 不解析出文件
      .end()
      // 去除svg默认带有的fill属性
      .use("svgo-loader")
      .loader("svgo-loader")
      .tap((options) => ({
        ...options,
        plugins: [{ removeAttrs: { attrs: "fill" } }],
      }))
      .end();
    config
      .plugin("svg-sprite")
      .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); // 其他的svg loader排除掉icons目录
  },
};
