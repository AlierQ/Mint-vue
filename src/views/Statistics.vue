<template>
  <div>
    <Layout>
      <template slot="top"></template>
      <template slot="content">statistics.vue</template>
      <template slot="bottom">
        <Nav></Nav>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
// 已经注册全局组件
// import Nav from "@/components/Nav.vue";
export default {
  name: "Statistics",
};
</script>

<style lang="scss" scoped></style>
