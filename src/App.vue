<template>
  <div id="app">
    <!--  组件展示位置，根据路由配置的路径，展示相应的组件  -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
/* 引入reset */
@import "~@/assets/style/reset.scss";
/* 全局样式变量 */
@import "~@/assets/style/helper.scss";
#app{
  /* 让字体显示更加清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 全局属性 */
  line-height: 1.5;
  font-family: $font-heiti;
  font-size: 16px;
  /* 解决ios手机浏览器点击闪现黑灰色背景 */
  -webkit-tap-highlight-color: transparent;
}
</style>
<script>
export default {
  components: {},
};
</script>
