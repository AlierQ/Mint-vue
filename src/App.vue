<template>
  <div>
    <!--  组件展示位置，根据路由配置的路径，展示相应的组件  -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  ol,
  ul {
    list-style: none;
  }
}
*::after,
*::before {
  box-sizing: border-box;
}
body{
  line-height: 1.5;
}
</style>
<script>
export default {
  components: {},
};
</script>
