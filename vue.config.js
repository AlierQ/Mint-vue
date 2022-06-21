// 配置webpack
const path = require("path");
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, "src/assets/icons");

    config.module
      .rule("svg-sprite")
      .test(/\.svg$/) // 匹配正则
      .include.add(dir) // 只让dir下的svg走这个规则
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ extract: false }) // 不解析出文件
      .end();
    config
      .plugin("svg-sprite")
      .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); // 其他的svg loader排除掉icons目录
  },
};
