<template>
  <div>
    <Layout>
      <!-- 可以使用template进行插入插槽，不会产生多余元素 -->
      <template slot="content"> detail.vue </template>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Detail",
};
</script>

<style lang="scss" scoped></style>
