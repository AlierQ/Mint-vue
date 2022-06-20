<template>
  <div class="nav">
    <router-link active-class="active" to="/detail">明细</router-link>&nbsp;
    <router-link active-class="active" to="/add">记一笔</router-link>&nbsp;
    <router-link active-class="active" to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid #42b983;
}
</style>
