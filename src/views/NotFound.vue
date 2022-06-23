<template>
  <div>
    <div class="page">
      <Icon name="404"></Icon>
      <!-- <a href="#/">返回首页</a> -->
      <router-link to="/" class="toDetail"><em>点击此处返回首页</em></router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >.icon{
    width: 240px;
    height: 240px;
    fill: $color-basic;
  }
  >.toDetail{
    margin-top: 10px;
    color: $color-basic;
    text-decoration:underline $color-basic;
  }
}
</style>
