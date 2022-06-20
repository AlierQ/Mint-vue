<template>
  <div class="nav-wrapper">
    <div class="content">
      <!-- 插槽，父组件使用该组件可以将内容插到这里 -->
      <!-- 具名插槽 -->
      <!-- 给插槽命名，以便于父组件选择插入 -->
      <slot name="content">这是一个插槽</slot>
      <!-- 一个空的插槽 -->
      <slot name="test"></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout",
};
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid blue;
  /* 超出内容滚动 */
  overflow: auto;
  /* 控制宽度占的份数,这里主轴是纵向的，所以变成了控制高度占的份数 */
  flex-grow: 1;
}
.nav-wrapper {
  border: 1px solid red;
  width: 100vw;
  height: 100vh;
  display: flex;
  //align-items: flex-end;
  flex-direction: column;
  //justify-content: flex-end;
}
</style>
