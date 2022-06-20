<template>
  <div>
    <Layout>
      <!-- 调用子组件并且将内容插到子元素内部的插槽中 -->
      <!-- 通过slot属性指定某一个插槽 -->
      <div slot="content">add.vue</div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "ADD",
};
</script>

<style lang="scss" scoped></style>
