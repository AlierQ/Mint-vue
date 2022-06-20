<template>
  <div>
    <!--  组件展示位置，根据路由配置的路径，展示相应的组件  -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.active {
  color: red;
}
</style>
<script>
import Nav from "@/components/Nav";
export default {
  components: {},
};
</script>
