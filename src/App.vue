<template>
  <div>
    <!--  组件展示位置，根据路由配置的路径，展示相应的组件  -->
    <router-view></router-view>
    <router-link active-class="active" to="/detail">明细</router-link>&nbsp;
    <router-link active-class="active" to="/add">记一笔</router-link>&nbsp;
    <router-link active-class="active" to="/statistics">统计</router-link>
  </div>
</template>

<style lang="scss">
.active {
  color: red;
}
</style>
<script>
export default {
  components: {},
};
</script>
