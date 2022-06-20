<template>
  <div>
    <div>
      <!-- <a href="#/">返回首页</a> -->
      <router-link to="/">点击返回首页</router-link>
    </div>
    <div>请求资源不存在，请检查网址是否正确！</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped></style>
